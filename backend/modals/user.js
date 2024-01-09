const mongoose = require('mongoose');

const userSchema = new mongoose.Schema ({
    name : {
        type : String,
        required : [true, 'Please enter Your Name'],
        trim : true
    },
    email : {
        type : String,
        required: [true, 'Please enter Email Address'],
        unique : true
    },
    password : {
        type : String,
        required : true
    }
}, 
{ timestamps: true }
)

const USER = mongoose.model('user', userSchema);

module.exports = USER;