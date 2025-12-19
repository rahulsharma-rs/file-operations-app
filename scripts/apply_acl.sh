#!/bin/bash
#SBATCH --job-name=ood-acl
#SBATCH --time=00:01:00
#SBATCH --partition=short
#SBATCH --output=ood-acl-%j.out
#SBATCH --error=ood-acl-%j.err

set -euo pipefail

TARGET_USER="$1"
TARGET_PATH="$2"
PERMS="$3"
MODE="$4" # New argument: set or remove


echo "========================================================"
echo "Job Started at $(date)"
echo "Host: $(hostname)"
echo "Args: User='$TARGET_USER' Path='$TARGET_PATH' Perms='$PERMS' Mode='$MODE'"
echo "========================================================"

if [ "$MODE" == "remove" ]; then
    echo "Running: setfacl -x u:${TARGET_USER} \"$TARGET_PATH\""
    setfacl -x "u:${TARGET_USER}" "$TARGET_PATH"
    echo "Success: Removed ACL from target."
else
    echo "Running: setfacl -m u:${TARGET_USER}:${PERMS} \"$TARGET_PATH\""
    setfacl -m "u:${TARGET_USER}:${PERMS}" "$TARGET_PATH"
    echo "Success: Applied ACL to target."

    # 2. Traverse up and grant +X (execute) to parents for traversal
    CURRENT_DIR=$(dirname "$TARGET_PATH")
    echo "Starting parent traversal from: $CURRENT_DIR"

    # Loop until we hit root or a directory we can't modify
    while [ "$CURRENT_DIR" != "/" ] && [ "$CURRENT_DIR" != "." ]; do
        # Try to set execute permission for traversal.
        if setfacl -m "u:${TARGET_USER}:X" "$CURRENT_DIR" 2>/dev/null; then
             echo "  + Granted traversal (+X) to: $CURRENT_DIR"
        else
             echo "  x Stopped traversal at: $CURRENT_DIR (Permission denied or System Root)"
             break
        fi
        
        CURRENT_DIR=$(dirname "$CURRENT_DIR")
    done
fi

echo "========================================================"
echo "Job Completed at $(date)"

