#!/bin/bash
#SBATCH --job-name=ood-acl
#SBATCH --time=00:01:00
#SBATCH --partition=short
#SBATCH --output=/data/user/%u/ood-acl-%j.out
#SBATCH --error=/data/user/%u/ood-acl-%j.err

set -euo pipefail

TARGET_USER="$1"
TARGET_PATH="$2"
PERMS="$3"
MODE="$4" # New argument: set or remove

if [ "$MODE" == "remove" ]; then
    setfacl -x "u:${TARGET_USER}" "$TARGET_PATH"
else
    # 1. Apply permission to the target file/folder
    setfacl -m "u:${TARGET_USER}:${PERMS}" "$TARGET_PATH"

    # 2. Traverse up and grant +X (execute) to parents for traversal
    # We start from the parent directory of the target
    CURRENT_DIR=$(dirname "$TARGET_PATH")

    # Loop until we hit root or a directory we can't modify
    while [ "$CURRENT_DIR" != "/" ] && [ "$CURRENT_DIR" != "." ]; do
        # Try to set execute permission for traversal.
        # Use || break to stop if we don't have permission (e.g. system dirs)
        setfacl -m "u:${TARGET_USER}:X" "$CURRENT_DIR" 2>/dev/null || break
        
        CURRENT_DIR=$(dirname "$CURRENT_DIR")
    done
fi
