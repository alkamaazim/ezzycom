const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema ({
    name : {
        type : String,
        required : [true, 'Please enter Your Name'],
        trim : true
    },
    email: { 
        type: String,
        unique : true
    },
    password : {
        type : String
    },
    tokens : [{
        token: {
            type: String,
            required: true
        }
    }],
}, 
{ timestamps: true }
)


userSchema.methods.generateJWToken = async function () {
    const user = this
    const token = jwt.sign({ _id : user._id.toString() },'userlogin');
    
    user.tokens = user.tokens.concat({ token }) 
    // await user.save()
    
    return token
}

const USER = mongoose.model('User', userSchema);

module.exports = USER;