To launch the application 

Install this extension:- https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en

ALLOW CORS OPTIONS VIA THIS EXTENSION FOR localhost:1234 and write:-

npm install, 
npm start

Additionally:- IF CSS Appears to be broken use these steps
[
In the Base Folder
npm install

Tailwind Installation Steps:-
npm install -D tailwindcss
npx tailwindcss init (Can skip if tailwind.config.js already exists)
npx tailwindcss -i ./index.css -o ./dist/output.css --watch

And then Add  

<link href="/dist/output.css" rel="stylesheet">

in index.html file
]

For more info you can also visit :- https://tailwindcss.com/docs/installation, to re-configure tailwind css

----------------------------------------------------------------------------------------------------------------------------------------------------------------

ALTERNATIVELY:-

Replace all the url with

http://localhost:8000/YOUR_DOMAIN

then

#GOTO src folder and write node index.js 

#then fire up another terminal, goto the base folder and write npm start to start the application.

----------------------------------------------------------------------------------------------------------------------------------------------------------------

To know more about class based components and different lifecycle methods see:-

About.js and ProfileClass.js 

------------------

And for their fucntion based counterparts see:- 

Profile.js

----------------------------------------------------------------------------------------------------------------------------------------------------------------
