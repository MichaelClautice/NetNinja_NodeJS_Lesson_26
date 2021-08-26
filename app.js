// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners
// Lesson 26 - Template Engines 2
//-----------
// WHAT THIS APP DOES------

/* https://youtu.be/RczQp3zCPXs

A template-view can output more than just JavaScript data. It can also interpret JavaScript code embedded in the HTML.

An embedded forEach() method in a template-view’s list item element <li> to iterate through an array of data will rendering each array item as its own  list item <li> element in the
template-view. */

// require the installed express pkg
const express = require('express');

// create an express app called mikesExpressApp
const mikesExpressApp = express();

// express app's set() mthd will
// set EJS as the template-view engine
mikesExpressApp.set('view engine', 'ejs');

// express app's HTTP GET req mthd 
// for the home pg route
// route that resp to a static client req for home pg
mikesExpressApp.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

// express app's HTTP GET req mthd 
// for the contact pg route
// route that resp to a static client req for contact pg
mikesExpressApp.get('/contact', function (req, res) {
    res.sendFile(__dirname + '/contact.html');
});

// express app's HTTP GET req mthd
// for the profile pg route w a person's dynamic name route
// route that resp to a dynamic client req for a specific profile name
mikesExpressApp.get('/profile/:name', function (req, res) {
    // create some data for demo purposes
    var data = { age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing', 'yoyoing', 'biking', 'dancing', 'sleeping'] };
    res.render('profile.ejs', { person: req.params.name, moreData: data });
});

// express app's listen() mthd will
// listen for port 3000
mikesExpressApp.listen(3000);

// con.log a test mssg
global.console.log('\n"Hey! The server now listening to Port 3000, Yall!"\n');