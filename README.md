# MongoDB Social Thoughts DB

  
## Description
I build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. However at the moment it is not functional due to technical issues. I used to learn Express.js (routing), MongoDB database, and the Mongoose ODM.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

  
## Installation
The site does not have a front-end, so it can only be accessed using Node and a terminal. The routes can be tested using POSTMAN or Insomnia.

## Usage
Enter the route, with the appropriate body to be sent if necessary, and watch the routes return 200 response of ok. The screenshot below shows the get all users functionality being tested in POSTMAN. Routes that can be testing are CREATE, READ, UPDATE, and DELETE for users and thoughts. There is also the ability to get by ID for users and thoughts. The user may also add friends and delete them via the user model friends parameter, which references back to the user model.

