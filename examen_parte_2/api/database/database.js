const mongoose = require('mongoose')

const db = mongoose.connect( 'mongodb://localhost:27017/exmen' , {
    useNewUrlParser: true,
    useUnifiedTopology: true},()=> {
    console.log('database Conected')
});

module.exports = db