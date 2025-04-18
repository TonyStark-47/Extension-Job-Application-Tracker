$extDir = "$env:USERPROFILE\Extension-Job-Application-Tracker"

if (-Not (Test-Path $extDir)) {
    git clone https://github.com/TonyStark-47/Extension-Job-Application-Tracker $extDir
}

Write-Host "Extension cloned to: $extDir"
Start-Process "chrome.exe" "chrome://extensions"
Write-Host "Enable Developer Mode and click 'Load unpacked', then select: $extDir"

