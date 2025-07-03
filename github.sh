#!/bin/bash

# --- File to always ignore ---
IGNORE_FILE="nohup.txt"

# --- Automatic .gitignore setup ---
# Check if .gitignore exists
if [ ! -f ".gitignore" ]; then
    echo "--- .gitignore not found. Creating it... ---"
    touch .gitignore
fi

# Check if nohup.txt is already in .gitignore
if ! grep -q "$IGNORE_FILE" .gitignore; then
    echo "Adding $IGNORE_FILE to .gitignore..."
    echo "$IGNORE_FILE" >> .gitignore
    # Add and commit .gitignore immediately so it takes effect for the current push
    git add .gitignore
    git commit -m "Add $IGNORE_FILE to .gitignore" || true # '|| true' allows the script to continue if no changes to commit
else
    echo "$IGNORE_FILE is already in .gitignore."
fi

echo "--- Checking Git status ---"
git status

echo "--- Adding all changes to staging (respecting .gitignore) ---"
git add .

# Check if there are changes to commit
if git diff --cached --quiet; then
    echo "No changes to commit. Exiting."
    exit 0
fi

echo "--- Committing changes ---"
read -p "Enter your commit message: " commit_message
git commit -m "$commit_message"

# --- Prompt for GitHub Credentials ---
echo "--- GitHub Credentials Required ---"
read -p "Enter your GitHub Username: " GITHUB_USERNAME
read -s -p "Enter your GitHub Password (or Personal Access Token): " GITHUB_PASSWORD
echo # Add a newline after the password prompt for better formatting

# Determine the current repository name for constructing the remote URL
REPO_NAME=$(basename "$(pwd)")

echo "--- Pushing changes to GitHub ---"
# Temporarily set the remote URL to include username and password
# This is insecure and assumes HTTPS remote.
git remote set-url origin "https://${GITHUB_USERNAME}:${GITHUB_PASSWORD}@github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"

# Push to the current branch (e.g., master or main)
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
git push origin "$CURRENT_BRANCH"

# Reset the remote URL to a clean version after push
git remote set-url origin "https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"

echo "--- Git push process completed ---"
echo "Remember to secure your GitHub account by using SSH keys or a Git Credential Manager for future pushes!"
