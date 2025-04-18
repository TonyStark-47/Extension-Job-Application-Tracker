#!/bin/bash

EXT_DIR=~/Extension-Job-Application-Tracker

if [ ! -d "$EXT_DIR" ]; then
  git clone https://github.com/TonyStark-47/Extension-Job-Application-Tracker.git "$EXT_DIR"
fi

echo "Extension cloned to: $EXT_DIR"
echo "Open Chrome and go to chrome://extensions"
echo "Enable Developer Mode, then click 'Load unpacked' and select the folder: $EXT_DIR"

