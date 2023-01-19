const inquirer = require('inquirer')
const markDown = require ('./utils/generateMarkdown');


//Array of questions for user input
const questions = [
    [
        {
            type: `input`,
            message: `What's the title of the project?`,
            name: `Title`,
            //validate property to check that the user provided a value
            validate: (valiue) => { if (value) {return true} else {return 'I need a value to continue'}},
        },
        {
            type: `input`,
            message: `Description of the project`,
            name: `Description`,
            validate: (valiue) => { if (value) {return true} else {return 'I need a value to continue'}},
        },
        {
            type:`input`,
            message: `What are the contents of the project?`,
            name: `Table of Contents`,
            validate: (valiue) => { if (value) {return true} else {return 'I need a value to continue'}},
        },
        {
            type: `input`,
            message: `How do you install the app?`,
            name: `Installation`,
            validate: (valiue) => { if (value) {return true} else {return 'I need a value to continue'}},
        },
        {
            type:`input`,
            message: `How do you use your app?`,
            name: `Usage`,
            validate: (valiue) => { if (value) {return true} else {return 'I need a value to continue'}},
        },
        {
            type:`list`,
            message: `What license did you use?`,
            name: `License`,
            choices:['The MIT License', 'The GPL License', 'Apache License', 'GNU license', 'N/A'],
            validate: (valiue) => { if (value) {return true} else {return 'I need a value to continue'}},
        },
        {
            type:`input`,
            message: `Guidelines for further contribution`,
            name: `Contributing`,
            validate: (valiue) => { if (value) {return true} else {return 'I need a value to continue'}},
        },
        {
            type:`input`,
            message: `Test instructions`,
            name: `Tests`,
            validate: (valiue) => { if (value) {return true} else {return 'I need a value to continue'}},
        },
        {
            type:`input`,
            message: `For questions (Github)?`,
            name: `Github`,
            validate: (valiue) => { if (value) {return true} else {return 'I need a value to continue'}},
        },
        {
            type:`input`,
            message: `For questions (E-mail)?`,
            name: `email`,
            validate: (valiue) => { if (value) {return true} else {return 'I need a value to continue'}},
        },
    ]
]



//function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generatorMarkdown(data));
            console.log(data)
        })
}


// Function call to initialize app
init();
