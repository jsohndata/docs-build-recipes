# Colorful Git Branch Terminal Prompt (OS X Monterey)

![Demo of color theme](https://jsohndata.s3.amazonaws.com/images/github-readme/git-branch-colorful-135-14-162.png)
```
function parse_git_branch() {
    git branch 2> /dev/null | sed -n -e 's/^\* \(.*\)/[\1]/p'
}

COLOR_PATH=$'%F{49}'
COLOR_GIT=$'%F{202}'
COLOR_SEPARTOR=$'%F{10}'

setopt PROMPT_SUBST
export PROMPT='${COLOR_PATH}%~%f ${COLOR_GIT}$(parse_git_branch)%f${COLOR_SEPARATOR}:%f'
```
## Inspiration
Saw [@neiloler's Gist](https://gist.github.com/doubleknd26/c4fcd2e65c3397947248878065b644ed) and decided to tweak it a bit. Thank you @neiloler. :)

<br>

## Let's Go
Copy paste the code in your .zshrc. ]
<br>
Located at `~/.zshrc`

<br>

## Your Color
Change the digits in the variables `%F{49}`.
<br>
I found this [color table](https://user-images.githubusercontent.com/995050/47952855-ecb12480-df75-11e8-89d4-ac26c50e80b9.png) to be very useful by [@fnky](https://gist.github.com/fnky/458719343aabd01cfb17a3a4f7296797#ansi-escape-sequences).

<br>

## Sample Theme
### 141, 190, 31 ![Sample theme](https://jsohndata.s3.amazonaws.com/images/github-readme/git-branch-colorful-141-190-31.png)

### 49, 202, 10 ![Sample theme](https://jsohndata.s3.amazonaws.com/images/github-readme/git-branch-colorful-49-202-10.png)