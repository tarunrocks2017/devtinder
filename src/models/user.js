const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: 3
  },
  lastName: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase:true
  },
  password:{
    type: String,
    required: true,
    minLength: 3
  },
  gender: {
    type: String,
    validation(value) {
        if(!['male', 'female', 'others']) {
            throw new Error("Gender data is not valid");
        }
    }
  },
  age: {
    type: Number,
    min: 18
  },
  about: {
    type: String,
    default: 'I am a software developer'
  },
  skills: {
    type: [String]
  },
  photoUrl: {
    type: String,
    default: "https://tse4.mm.bing.net/th/id/OIP.hGSCbXlcOjL_9mmzerqAbQHaHa?pid=Api&P=0&h=180"
  }
},{
    Timestamp: true
});

module.exports = mongoose.model("User", userSchema);
