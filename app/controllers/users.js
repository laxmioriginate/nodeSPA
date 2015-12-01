var mongoose = require('mongoose');
require('../models/user');
var User = require('mongoose').model('User');

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'aaranrandy@gmail.com',
        pass: 'randy2015'
    }
});


var mailOptions = {
    from: 'Fred Foo ✔ <foo@blurdybloop.com>', // sender address
    to: 'aaranrandy@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ✔', // plaintext body
    html: '<b>Hello world ✔</b>' // html body
};


exports.create = function(req, res, next) {
    var user = new User(req.body);
    user.save(function(err) {
        if (err) {
            return next(err);
        }
        else {
            transporter.sendMail(mailOptions, function(error, info){
                if(error){
                    return console.log(error);
                }
                console.log('Message sent: ' + info.response);

            });
            res.json(user);
        }
    });
};

exports.index = function (req, res) {
 // var query = require('url').parse(req.url, true).query;
  User.find({}).exec(function (err, users) {
      if(err) {return res.status(403); }
      res.json({users: users});
    });
}


exports.destroy = function(req, res){
  console.log("User we're deleting", req.params);

  User.remove({ _id: req.params.userId }, function(err){
    if(err) {return res.status(403); }
    res.json({});
  });
};

exports.update = function(req, res){
  console.log("User we're deleting", req.params);
  var user = new User(req.body);
  //res.send(req.body);
  User.update({_id:req.params.userId}, user, function(err, user){
    if(err) {return res.status(403); }
    res.json({user: user});
  });
};

exports.signupFailure = function(req, res){
  console.log("User we're deleting", req.params);
   
  res.send("signup Failure");
};

exports.signupSuccess = function(req, res){
  console.log("User we're deleting", req.params);
   
  res.send("signup success");
};