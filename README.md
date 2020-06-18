# phoneBook
Exercise to check react and mongo interaction, as well as testing backend

## How to deploy this app (frontendand backend)

### Backend:

To deploy to heroku ensure you have an heroku account, and add a heroku repo to the project via heroku create

Once done, push only the backend subtree to the master branch of the heroku repo via the following command : 
- `git subtree push --prefix backEnd/ heroku master`

set up the heroku config file with the following environement variables
- `NODE_ENV: production`
- `PORT: the port you wish to use`
- `DATABASE_URL: the string used to connect to your own mongo database (ex : mongodb+srv://cooluser:coolpassword@cluster0-mbdj7.mongodb.net/local_library?retryWrites=true)`

### Frontend:

Modify the .env file so that the REACT_APP_SERVER_URL is now the url to your deployed heroku backend
Modify the package.json file in the frontEnd folder, changing the homepage value to be the one used for your own repo.

Push the code to your own repo on github. Either the entire project or just the frontEnd with the `git subtree push --prefix frontEnd/ {remote} {branch}` command

In the terminal, navigate to the frontEnd folder and then enter the following commands: 
- `npm install`
- `npm run deploy`
