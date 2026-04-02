[<-- back to main](./README.md)

[os fundamentals -->](./os_fundamentals.md)

## Shell Commands

```bash
echo hello world  # This works like console.log()

# Variables in bash
num1 = 6
num2 = 5

echo $((num1 + num2))
```

We can use `.sh` files to run bash commands using `./filename.sh`

```bash
pwd # pwd command prints your current working directory --> /d/web-dev-notes

whoami # prints your current username --> heyit

cd # change directory
    - cd ~/ # home directory
    - cd /  # root directory
    - cd ./ # current directory
    - cd ../ # parent directory

ls # list the contents
    - ls -a # show all files and folders
    - ls -la # show all with permissions

touch # use for creating files

mkdir # use for creating directories

cp # use for copy files or directory
    - cp app.js src/script/ # copy file without rename
    - cp app.js src/script/script.js # copy file with rename

mv # use for move

rm # use for deleting files

rmdir # use for deleting empty directory

rm -r # use to delete non-empty directory --> -r (recurssive)
```

```bash
cat # Reading files in Terminal
    - cat app.js

nano # use to edit files in terminal
    - nano app.js
        - ctrl + o # Save
        - ctrl + x # exit

vim # use to edit files in terminal
    - vim app.js
        - esc # change mode
        - :q # quit
        - :w # write / save
        - :q! # quit without save
        - :wq # save and quit
```

`.bashrc` This file run whenever new terminal start
```bash
source ~/.bashrc

alias source = source ~/.bashrc # in .bashrc file
```
[os fundamentals -->](./os_fundamentals.md)

[<-- back to main](./README.md)
