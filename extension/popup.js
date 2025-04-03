document.addEventListener("DOMContentLoaded", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        let tab = tabs[0];
        document.getElementById('url').textContent = tab.url;
        document.getElementById('title').textContent = tab.title;
    });
});

document.getElementById('extractContent').addEventListener("click", function (){
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.scripting.executeScript(
            {
                target: {tabId: tabs[0].id},
                function: () => document.body.innerText
            },
            (result) => {
                let pageData = {
                    url: tabs[0].url,
                    title: tabs[0].title,
                    content: result[0].result
                };
                sendDataToServer(pageData);
            }
        );
    });
});


function sendDataToServer(data) {
    fetch("http://localhost:5000/save_data", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => alert("Data sent to server!"))
    .catch(error => console.error("Error sending data:", error));
}