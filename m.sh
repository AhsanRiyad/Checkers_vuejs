alias a='git add -A'
alias c='git commit -m '
alias pull='git pull origin master'
alias p='git push origin master'
alias all='git add -A; git commit -m "commit by alias" -m "this is used for short cut puspose"; git push origin master'
alias s='git status'
alias l='git log'
alias clr='clear'
cat /dev/null > ~/.bash_history # delete history from files
history -c # clears current history but keeps it in the file so that it can retrieve again
clear