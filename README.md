# Setting Up Your Environment to run this APP:

Install Node.js and npm on your machine.
Choose a code editor like Visual Studio Code for getting through the code base if required or can
run from terminal if one just wants to run the application.
--> npm i from main folder
--> npm start from any terminal(VSC)
Flow-Usage:
Initial page is entire Player's list and 
Alex(user) can click on any player row to look unique details
also can perform delete option by clicking delete at the end of the row
Filter players based on game session with selection option given
Currently if navigate directly to player details page no data displayed
Alex can add a player but the form is validated so only when all the required
fields are filled will be able to add player

Github link - currently pushed changes to the main master branch if required Prod/Staging branch need
to be created.

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

or can push the changes from VSC without commands based on the neccessity

# Follow-Up Questions

1) How long, in hours, did you spend on the test (not including learning)?
About 6 hrs in development only other than references(including making UI improvements and 
related changes).

2) Did you have to learn any new languages/technologies? If so, which ones and what
resources did you use for your learning?
mostly for how to use few packages not entirely a new technology
useState - https://blog.logrocket.com/guide-usestate-react/
makestyles - https://docs.tss-react.dev/api/makestyles
how to pass data between components - https://www.pragimtech.com/blog/reactjs/interaction-between-components-in-react/

3) If you had more time, what further improvements or new features would you add?
Would have added Edit functionality now only add,view and delete players is supported
And would have updated more styling and user interaction options based on try-out

4) What did you spend the most time on? What did you find most difficult?
Not exactly I could say difficult,took some time to figure out a solution/betterment
Some packages had when doing this -> npm install @mui/material @mui/styles
and resolved by npm config set legacy-peer-deps true
npm start error 
The error "error:0308010C:digital envelope routines::unsupported"
fix  "start": "react-scripts --openssl-legacy-provider start",
Some time taken with respect to using which components to pick and design the app
Took some time to load a individual player's details in separate menu
Spacing issue between form fields
error handling

5) How did you find the test overall? If you have any suggestions on how we can improve the
test we’d love to hear them.
Looks good but it doesnot involve the Backend technologies
But overall good test.