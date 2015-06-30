var passport = require('passport');
var Tiffin = require('../models/Tiffin'); 
var Checkout = require('../models/Checkout'); 
var Checkin = require('../models/Checkin'); 

exports.getSignUp = function(req,res){
        res.render('signup');
    }

exports.postSignUp = function(req,res){
        var user = new Tiffin
        (
          {
            email: req.body.email, password: req.body.password,
            tiffin:{tiffinBarcode: req.body.tiffinBarcode},
            bag: {bagBarcode: req.body.bagBarcode,address:req.body.address}
          }
          );

            user.save();
            res.render('front');
      
            }

exports.postSignIn = function(req,res, next){
    passport.authenticate('local',function(err, user, info) {
      if (err) return next(err);
      if (!user) {
        console.log('errors');
        return res.redirect('/');
      }
      req.logIn(user, function(err) {
        if (err) return next(err);
        console.log('Success! You are logged in.');
        res.render('signin');
      });
    })(req, res, next);
}

exports.getSignOut = function(req,res, next){
  req.logout();
  res.redirect('/');  //redirects to home page
}
exports.postCheckIn = function(req,res, next){
  var user = new Checkin
        (
          {
            tiffinBarcode: req.body.tiffinBarcode,
            bagBarcode: req.body.bagBarcode
          }
          );
          
           user.save();
           res.send('You are succesfully checked in');
      
            }
exports.postCheckOut = function(req,res, next){
  var user = new Checkout
        (
          {
            tiffinBarcode: req.body.tiffinBarcode,
            bagBarcode: req.body.bagBarcode
          }
          );

            user.save();
            res.send('You are succesfully checked out');
         }
            



