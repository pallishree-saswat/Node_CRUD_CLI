const mongoose = require("mongoose")

const studentSchema = mongoose.Schema({
    firstname : {
        type : String
    },
    lastname : {
        type : String
    },
   phone : {
        type : String
    },
   email: {
        type : String
    }
})

//define and export
module.exports = mongoose.model('Student', studentSchema);