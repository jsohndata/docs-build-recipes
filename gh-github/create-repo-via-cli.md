# Git: Create and Push to a Repo to GitHub via Terminal

Prereq: Have gh installed
```
npm install -g gh
```

<br>

## Flags
* --source=. :The current directory
* --public: Make the repo public
* --push: Push it to GitHub

<br>

## For Single GitHub owner
Create a repo using the currently directory name, make the repo public, then push it
```
gh repo create --source=. --public --push
```

<br>

## For Multiple GitHub owners with Custom Repo Name
Create a repo under the owner GIT_USER_NAME, title of the repo will be REPO_NAME_OF_CHOICE, make it puiblic, then push it
```
gh repo create GIT_USER_NAME/REPO_NAME_OF_CHOICE --source=. --public --push
```