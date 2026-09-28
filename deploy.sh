#!/usr/bin/env bash
# Runs from .cpanel.yml after "Pull or Deploy", or manually to rebuild without a new pull.
set -euo pipefail

readonly APP_NAME="xquery"
readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

find_venv_activate() {
  find "$HOME/nodevenv/$APP_NAME" -maxdepth 2 -name activate -print -quit 2>/dev/null
}

build_app() {
  local venv_activate
  venv_activate=$(find_venv_activate)

  if [ -z "$venv_activate" ]; then
    echo "No Node virtual environment found under $HOME/nodevenv/$APP_NAME" >&2
    echo "Create the application once in cPanel -> Setup Node.js App, then deploy again." >&2
    exit 1
  fi

  echo "==> Building (using $venv_activate)"
  # shellcheck disable=SC1090
  source "$venv_activate"
  cd "$SCRIPT_DIR"

  # cPanel's "Production" app mode sets NODE_ENV=production, which would
  # otherwise make npm skip the devDependencies that `nuxt build` needs.
  npm ci --include=dev
  npm run build

  deactivate
}

restart_app() {
  echo "==> Restarting Passenger"
  mkdir -p "$SCRIPT_DIR/tmp"
  touch "$SCRIPT_DIR/tmp/restart.txt"
}

build_app
restart_app

echo "Done: $APP_NAME built and restarted"
