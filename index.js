const mongoose = require("mongoose");
//import model
const Student = require('./model/student')


//map global promise - get rid of warning
mongoose.Promise = global.Promise;

//connect to db
const db = mongoose.connect('mongodb://localhost:27017/studentcli', {
    useNewUrlParser : true,
    useUnifiedTopology : true,
    useFindAndModify : true
})





//add student
const addStudent = (student) => {
    Student.create(student).then(student => {
        console.info('New student added');
        //db.close()
    })
}

//find student
const findStudent = (name) => {
    //make case insensitive
    const search = new RegExp(name, 'i');
    Student.find({$or:[{firstname : search}, {lastname : search}]})
    .then(student => {
        console.info(student)
        console.info(`${student.length} matches` )
    })
    
}

//update a student
const updateStudent = (_id, student) => {
   Student.findByIdAndUpdate({_id}, student)
   .then(student => {
       console.info('Student Updated')
   });
    
};


//remove a student
const removeStudent = (_id) => {
    Student.remove({_id})
    .then(student => {
        console.info('Student removed')
    });
     
 };

 //find all students
const listStudents = () => {
 Student.find()
 .then(students => {
     console.info(students);
     console.info(`${students.length} students found`)
 })
    
}







module.exports = {
    addStudent, findStudent, updateStudent,removeStudent,listStudents
}