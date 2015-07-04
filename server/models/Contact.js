var mongoose= require('mongoose');

var contactSchema = new mongoose.Schema({
	lunch: Boolean,
	dinner: Boolean,
	veg: Boolean,
	nveg: Boolean,
  	subject: String,
  	message: String
});


var Contact = mongoose.model('Contact',contactSchema);
module.exports = Contact;
