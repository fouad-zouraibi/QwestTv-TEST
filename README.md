# QwestTv-TEST
## Overview

This is a full-stack project that combines a Node.js back-end with TypeScript and a React.js front-end. It's designed to showcase a simple but functional application for creating, managing, and downloading files. The back-end handles the file creation and management, while the front-end offers a user-friendly interface for users to interact with the files.

## Back-end Features (Node.js with TypeScript)

If you want to use your own Postman you can find below the routes with examples, if you don't, there is an easy just in your browser, use this link : https://documenter.getpostman.com/view/29430084/2s9YR9aDcr .

Route GET to create a file :

        http://localhost:3000/file/create/:name/:type
        Exemple :  http://localhost:3000/file/create/fouad/csv

Route GET to list all the files :

        http://localhost:3000/file/list

Route GET to download a file :

        http://localhost:3000/file/download/:filename
        Exemple :  http://localhost:3000/file/download/fouad.csv

Route DELETE to delete a file :

        http://localhost:3000/file/delete/:filename
        Exemple :  http://localhost:3000/file/delete/fouad.csv

## Front-end Features (React.js)

It's just a basic frontend, that let us create or delete or download a file (You can find the code in Home.js under pages directory)

## Getting Started

To run the project please clone the project in your directory of choice, then open it your terminal and run it using the following commands :

For the backend :

        cd backend
        npm i
        npm run dev
    
For the frontend in the same terminal: 

        cd .. 
        cd frontend
        npm i
        npm start
        Then press enter for he warning

Technologies used in this project are : 

        Node.js
        TypeScript
        React.js
        Express.js
        Axios
        fs (File System)
        csv-writer
        xmlbuilder
        ExcelJS


