#!/usr/bin/env bash
# Runs from .cpanel.yml after "Pull or Deploy", or manually to rebuild without a new pull.
set -euo pipefail

readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
# cPanel mirrors the Application Root's full path (relative to $HOME) under
# nodevenv/, not just its leaf folder name — e.g. an app at
# ~/myapp gets its venv at ~/nodevenv/myapp/<version>.
readonly APP_REL_PATH="${SCRIPT_DIR#"$HOME"/}"

find_venv_activate() {
  find "$HOME/nodevenv/$APP_REL_PATH" -maxdepth 2 -name activate -print -quit 2>/dev/null
}

build_app() {
  local venv_activate
  venv_activate=$(find_venv_activate)

  if [ -z "$venv_activate" ]; then
    echo "No Node virtual environment found under $HOME/nodevenv/$APP_REL_PATH" >&2
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

echo "Done: $APP_REL_PATH built and restarted"
