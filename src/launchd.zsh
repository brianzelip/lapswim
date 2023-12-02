#!/usr/bin/env zsh

# This script is run by launchd at login and every 5 mins of CPU uptime
# via ~/Library/LaunchAgents/local.lapswim.plist
#
# Requirements:
# - jq installed via Homebrew at /opt/homebrew/bin/jq
# - Node.js installed via nvm at ~/.nvm
# - lapswim installed at ~/Code
#
# Homebrew and nvm added to PATH below as launchd doesn't source ~/.zshrc

export PATH="/opt/homebrew/bin:$PATH"

if [[ $(jq -r '.lastUpdated' ~/Code/lapswim/src/db.json) != $(date +%Y-%m-%d) ]]; then
  export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
  [ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"

  cd ~/Code/lapswim && npm run launchd
else
  echo "Data is up to date, $(date)"
fi
