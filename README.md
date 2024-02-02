Please refer to [notes-app](https://github.com/s-manguy/notes-app) for the front-end part of the Notes App.

# Notes App Server Side
This project is based on a [Tutorial written by Chris Blakely](https://www.freecodecamp.org/news/full-stack-project-tutorial-create-a-notes-app-using-react-and-node-js/).

***Important : Please note that:***
* ***I have not used Typescript on my version of the project;***
* ***I have improved some parts...***

The full stack notes app has been built from scratch, using React, Node.js and PostgreSQL with the following features:
*  Create/Edit/Delete Notes
*  Validation on the UI and Backend
*  Responsive on mobile screens

## Prerequisites
*  Some knowledge about web development concepts (frontend, backend, databases, API's, REST).
*  Some knowledge of JavaScript (variables, functions, objects, arrays, and so on).
*  Basic understanding on React (how to create components, add styles, work with state).
*  Basic understanding on Node.js/Express (working with APIs).

## Setup
* I have not installed typescript.
* I have added the "start" script in the package.json file but the indicated command didn't run so I have changed "npx nodemon" to "nodemon ./src/index.js" indicating the file path.
* I have added a get route at the root 
```javascript
app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});
```

## Create a Postgres Database
* I have created a free plan [ElephantSQL](https://www.elephantsql.com/) account.
* Remark: Of course, it is possible to run SQL Query as indicated in the tutorial but... as there is no table created the given SQL command will run ! Moreover, as Prisma is used to create the table, it is better not to run SQL command before setting Prisma.

## Connect to DB from Node.js backend using Prisma
* The connection URL can be found in the instance details. Do not forget to replace *** by the password.

## Create Endpoints

## Connect the UI to the backend
Please refer to [notes-app](https://github.com/s-manguy/notes-app) for the front-end part of the Notes App.