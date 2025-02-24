---
title: Git summary
layout: good_clean_default
category: None
tag: None
status: finished
published: true
---

# Initializing, adding, commiting and reseting locally

**Remove file that was added but not yet commited** \
`git reset <file>`

# Branches

**Switch to existing other branch**\
`git checkout <branch>`

**Create and switch to new branch**\
`git checkout -b <branch>`


**list exisiting *local* branches**\
`git branch`

**list exisiting *remote* branches**\
`git branch -r`

**list exisiting *local* and *remote* branches**\
`git branch -a`



# Remote stuff

**show remote information of repository**\
`git remote show origin`

**add remote origin to local repository**\
`git remote add origin git@github.com:<REPO>` \
*make sure to add the `ssh` url, otherwise `ssh` autentification will not work when `pushing`*

**remove remote origin from local repository** \
`git remote remove origin`

