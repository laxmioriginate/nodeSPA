'use strict';

 // app/routes.js
 
 var mongoose = require('mongoose');
 var passport = require('passport');
 // var db11 = require('../config/passport');


// grab the service model we just created
//var Service = require('./models/service');

    module.exports = function(app, passport) {

        var users = require('./controllers/users');
        app.get('/api/users', users.index);
        app.post('/api/users', users.create);
        app.delete('/api/users/:userId', users.destroy);
        app.put('/api/users/:userId', users.update);

        app.post('/api/signup', passport.authenticate('local-login', {
            successRedirect : '/signupSuccess', // redirect to the secure profile section
            failureRedirect : '/signupFailure', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

        app.get('/api/signupFailure', users.signupFailure);

        app.get('/api/signupSuccess', users.signupSuccess);

        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html'); // load our public/index.html file
        });

    };

  

