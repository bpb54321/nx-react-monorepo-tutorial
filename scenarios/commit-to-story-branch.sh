#!/bin/bash

# Check if the correct number of arguments is provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <story-number> <project-path>"
    exit 1
fi

# Assign arguments to variables
STORY_NUMBER=$1
PROJECT_PATH=$2

# Create the branch name
BRANCH_NAME="story/my-story-$STORY_NUMBER"

# Append text to the Readme file of the specified app
README_PATH="$PROJECT_PATH/Readme.md"

# Create story branch
git checkout -b $BRANCH_NAME

# commit 1 to story branch
echo "Text added." >> $README_PATH
git commit -am "Modify some code"

# commit 2 to story branch
echo "Text added." >> $README_PATH
git commit -am "Modify some code"

# push

git push --set-upstream origin $BRANCH_NAME


