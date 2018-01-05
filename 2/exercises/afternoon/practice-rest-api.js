const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// log requests
app.use(logger('dev'));
// create req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


let idTracker = 1;
// call this function to create new ids
// BONUS: how would you use a closure here to get idTracker out of global scope?
function genId() {
    return idTracker++;
}

// create a REST API for your users db, defined below:
// the database will just be the array of users
// creating a user is defined as pushing a new object to the array
// deleting a user is defined as removing the respective user object from the array
const users = [
    {
        id: 0,
        name: 'John Doe',
        email: 'john@doe.com',
        // NOTE: never actually store pws in plaintext
        password: 'asdf'
    }
];

// clients should be able to create new users, get all users, get a single user,
// update a user (based on their id), and delete a user
// feel free to use any built-in functions (including ES6 functions)
// don't use any external libraries (no more require() statements)




// if you finish early, start adding data validation. don't insert values other
// than name/email/pw, reject creations if they don't have an email and pw, etc.

const server = app.listen(3000);
console.log('Listening at http://localhost:%s in %s mode',
    server.address().port, app.get('env'));

module.exports = app;
