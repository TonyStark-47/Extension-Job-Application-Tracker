# 🧩 Job Application Tracker Extension (Dev Mode Install)

A Chrome extension to help you track job applications directly from your browser — simple, self-hosted, and updated via GitHub.

---

## 🚀 One-Time Setup (No Chrome Store Required)

You can install this extension manually in **Developer Mode** using GitHub as the source.

---

### 🖥️ Windows Setup

1. ✅ [Install Git for Windows](https://git-scm.com/)
2. ✅ Download or clone this repo:
Open PowerShell and run:
```powershell
git clone https://github.com/TonyStark-47/Extension-Job-Application-Tracker "$env:USERPROFILE\Extension-Job-Application-Tracker"
```
3. ✅ Open Chrome and go to: `chrome://extensions` (or) brave://extensions (or) Click the three dots (`⋮ `) in the **top-right corner** of Chrome * Go to **"Extensions"**
4. ✅ Enable **Developer Mode** (top right)
5. ✅ Click **Load unpacked**
6. ✅ Select the folder:
```
C:\Users\<YourUsername>\Extension-Job-Application-Tracker
```
---
### 🐧 macOS / Linux Setup

1. ✅ Make sure Git is installed (`git --version`)
2. ✅ Open Terminal and run:
```bash
git clone https://github.com/TonyStark-47/Extension-Job-Application-Tracker ~/Extension-Job-Application-Tracker
```
3. ✅ Open Chrome and go to: `chrome://extensions`
4. ✅ Enable **Developer Mode**.
5. ✅ Click **Load unpacked**.
6. ✅ Select the folder:

```
~/Extension-Job-Application-Tracker
```

---

## 🔄 Updating the Extension

Whenever a new version is released, you can pull updates directly from GitHub.

### 🪟 Windows

Open PowerShell and run:

```powershell
cd "$env:USERPROFILE\Extension-Job-Application-Tracker"
git pull
```
Or simply run the included `update.ps1` script:
```powershell
.\update.ps1
```

### 🐧 macOS / Linux
Open Terminal and run:
```bash
cd ~/Extension-Job-Application-Tracker
git pull
```
Or use the included `update.sh`:
```bash
./update.sh
```


### 🔁 Final Step After Update
After pulling updates, Chrome **does not auto-reload** unpacked extensions. You need to either:
* Click the **🔄 Refresh** icon next to the extension in `chrome://extensions`
* Or close and reopen Chrome

---

### 📌 Pin the Extension to Your Toolbar

1. Click the 🧩 **Extensions icon** in the top-right corner of Chrome (next to your profile picture).
2. Find **"Job Application Tracker"** in the list.
3. Click the 📌 **pin icon** next to it.

The extension icon will now stay visible in your toolbar for quick access!

---

Have feedback or want to contribute? Submit an issue or PR on GitHub.

Happy tracking! 🚀
