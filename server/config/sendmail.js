var nodemailer = require('nodemailer');

var smtpTransport = nodemailer.createTransport('SMTP', 
{
  service: 'gmail',
  auth: {
    user: "dabbawala.order@gmail.com",
    pass: "ronlivswa" ,
    // server: 'smtp.gmail.com', 
    // port:25
  }
});



exports.getSendMail = function(req, res){
    res.render('sendmail')
};

exports.postSendMail = function (req, res) {
 
  //Mail options
 var mailOptions = {
      from: req.body.name, //grab form data from the request body object
      to: 'dabbwala.order@gmail.com',
      subject: 'Website contact form',
      text: req.body.message
  };
   
 console.log(mailOptions);

smtpTransport.sendMail(mailOptions, function (error, response) {
      //Email not sent
      if (error) {
          res.render('sendmail', { title: 'Send Mail', msg: 'Error occured, message not sent.', err: true, page: 'sendmail' });
          console.log(error);
      }
      //Yay!! Email sent
      else {
          res.render('sendmail', { title: 'Send Mail', msg: 'Message sent! Thank you.', err: false, page: 'sendmail' });
          console.log('sent');
         
      }
  });
}