# Setting Up Your Environment to run this APP:

Install Node.js and npm on your machine.
Choose a code editor like Visual Studio Code for getting through the code base if required or can
run from terminal if one just wants to run the application.
--> npm i from main folder
--> npm start from any terminal

# Git commands mostly required/used in this app:
for initial one time SSH setup:
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
cat ~/.ssh/id_rsa.pub
GitHub account settings, navigate to "SSH and GPG keys," and click on "New SSH key."
ssh -T git@github.com
git remote set-url origin git@github.com:<username>/<repository>.git
git config --global user.name "Your Name"
git config --global user.email "youremail@yourdomain.com"
git init

Main git commands for regular usage:
git add <file_name>
git commit -m "Your commit message here"
//git log
git push -u origin master
