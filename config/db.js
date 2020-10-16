const mongoose = require('mongoose')
const url = 'mongodb://localhost/newstudents'
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.connect(url, {useNewUrlParser:true},(err) => {
    if (!err)
    console.log('MongoDB connection succeeded.');
    else
    console.log('Error in DB connection:' + JSON.stringify(err,undefined,2));
});