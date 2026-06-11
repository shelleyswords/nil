#!/bin/bash
# Double-click this file to talk to your NIL Game Plan specialist.
# It opens your project and starts Claude — then just type what you need.

# Go to this project's folder (wherever this file lives)
cd "$(dirname "$0")" || exit 1

# Load your PATH so the `claude` command is found
[ -f "$HOME/.zprofile" ] && source "$HOME/.zprofile" 2>/dev/null
[ -f "$HOME/.zshrc" ] && source "$HOME/.zshrc" 2>/dev/null
[ -f "$HOME/.bash_profile" ] && source "$HOME/.bash_profile" 2>/dev/null
[ -f "$HOME/.profile" ] && source "$HOME/.profile" 2>/dev/null

clear
echo "🏈  The NIL Game Plan — your specialist is starting up..."
echo "    Just type what you'd like to do, in plain English."
echo "    (e.g. \"change the price to \$39\" or \"write a new blog post about NIL taxes\")"
echo

if ! command -v claude >/dev/null 2>&1; then
  echo "⚠️  Couldn't find the 'claude' command."
  echo "    It looks like Claude Code isn't installed yet, or its location isn't on PATH."
  echo "    Ask Jamie (or your specialist) to finish the one-time setup in SHELLEY-START-HERE.md."
  echo
  echo "Press any key to close..."
  read -n 1
  exit 1
fi

exec claude
