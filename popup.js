document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const loginBtn = document.getElementById("loginBtn");

    const loginSection = document.querySelector(".section:nth-child(1)");
    const extractSection = document.querySelector(".section:nth-child(2)");

    const logoutBtn = document.createElement("button");
    logoutBtn.id = "logoutBtn";
    logoutBtn.textContent = "Logout";
    logoutBtn.style.marginTop = "10px";

    // Check if user is already logged in
    chrome.storage.local.get("user_id", (result) => {
        if (result.user_id) {
            loginSection.style.display = "none";
            extractSection.appendChild(logoutBtn);
        }
    });

    loginBtn.addEventListener("click", () => {
        const email = emailInput.value;
        const password = passwordInput.value;

        fetch("https://job-application-tracker-33ph.onrender.com/login_through_extension", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })
        .then(res => res.json())
        .then(data => {
            if (data.user_id) {
                chrome.storage.local.set({ user_id: data.user_id }, () => {
                    alert("Login successful!");
                    loginSection.style.display = "none";
                    extractSection.appendChild(logoutBtn);
                });
            } else {
                alert("Login failed!");
            }
        })
        .catch(err => {
            console.error("Login error:", err);
            alert("Error connecting to server.");
        });
    });

    logoutBtn.addEventListener("click", () => {
        chrome.storage.local.remove("user_id", () => {
            alert("Logged out!");
            loginSection.style.display = "block";
            logoutBtn.remove();
        });
    });

    // Display page info
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let tab = tabs[0];
        document.getElementById('url').textContent = tab.url;
        document.getElementById('title').textContent = tab.title;
    });

    // Extract content
    document.getElementById('extractContent').addEventListener("click", function () {
        chrome.storage.local.get("user_id", (result) => {
            if (!result.user_id) {
                alert("Please log in first.");
                return;
            }

            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.scripting.executeScript(
                    {
                        target: { tabId: tabs[0].id },
                        function: () => document.body.innerText
                    },
                    (resultData) => {
                        let pageData = {
                            user_id: result.user_id,
                            url: tabs[0].url,
                            title: tabs[0].title,
                            content: resultData[0].result
                        };
                        sendDataToServer(pageData);
                    }
                );
            });
        });
    });
});

function sendDataToServer(data) {
    fetch("https://job-application-tracker-33ph.onrender.com/save_data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => alert("Data sent to server!"))
    .catch(error => console.error("Error sending data:", error));
}
