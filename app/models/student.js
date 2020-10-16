var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var studentSchema = new Schema({
  name: String,
  age: Number,
  maths: Number,
  science: Number,
  english: Number,
  total: Number,
  active: Boolean,
  address : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address'
     }

});

module.exports = mongoose.model('Students', studentSchema);;