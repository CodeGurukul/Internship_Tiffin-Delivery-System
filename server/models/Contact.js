var mongoose= require('mongoose');

var contactSchema = new mongoose.Schema({
  email: {type: String, required: true},
  subject: {type: String, required: true},
  message: {type: String, required: true}
});


var Contact = mongoose.model('Contact',contactSchema);
module.exports = Contact;
