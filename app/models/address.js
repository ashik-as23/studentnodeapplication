var mongoose = require('mongoose');

var AddressSchema = new mongoose.Schema({
    city: String,
    state: String,
    pincode: String
});

module.exports = mongoose.model("Address", AddressSchema);