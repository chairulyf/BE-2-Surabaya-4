const mongoose = require('mongoose')
//membuat schema
const Contact = mongoose.model('Contact',{
  nama : {
      type: String,
      required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  nohp: {
    type: String,
    required: true,
  },

})

module.exports= Contact