var mongoose= require('mongoose');
var Tiffin = require('./Tiffin');

var contactSchema = new mongoose.Schema({
  email: {type: String, required: true},
  t_id : [{type: mongoose.Schema.Types.ObjectId, ref: 'Tiffin'}],
  subject: {type: String, required: true},
  message: {type: String, required: true},
  location :{type:String},
  veg: Boolean,
  nonveg: Boolean,
  lunch: Boolean,
  dinner: Boolean

});


var Contact = mongoose.model('Contact',contactSchema);
module.exports = Contact;
