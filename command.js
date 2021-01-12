#!/usr/bin/env node
const program = require('commander')
const  { prompt } = require("inquirer")

const { addStudent, findStudent, updateStudent, removeStudent, listStudents } = require('./index')

//student questions
const questions = [
    {
        type: 'input',
        name :'firstname',
        message : 'Student First Name'

    },
    {
        type: 'input',
        name :'lastname',
        message : 'Student Last Name'

    },
    {
        type: 'input',
        name :'phone',
        message : 'Student Student Phone number'

    },
    {
        type: 'input',
        name :'email',
        message : 'Student Email Adress'

    }
];

program
.version("1.0.0")
.description('Student management system')

/* program
.command('add <firstname> <lastname> <phone> <email>')
.alias('a')
.description('Add a student')
.action((firstname, lastname, phone, email) => {
    addStudent({firstname,lastname,phone,email})
}) */

//add student program
program
.command('add')
.alias('a')
.description('Add a student')
.action(() => {
    prompt(questions).then(answers => addStudent(answers))
})


//find a student program
program
.command('find <name>')
.alias('f')
.description('Find a student ')
.action(name => findStudent(name))

//update a student program
program
.command('update <_id>')
.alias('u')
.description('Update a student')
.action((_id) => {
    prompt(questions).then(answers => updateStudent(_id, answers))
})

//remove a student program
program
.command('remove <_id>')
.alias('r')
.description('remove a student')
.action(_id => removeStudent(_id))

//findall students program
program
.command('list')
.alias('l')
.description('Find all student ')
.action(()=> listStudents())

program.parse(process.argv)