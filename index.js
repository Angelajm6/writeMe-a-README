const inquirer = require('inquirer')
const generateMarkdown = require ('./utils/generateMarkdown');
const util = require ('util');
const fs = require('fs');


//Array of questions for user input
const questions = [
        {
            type: `input`,
            message: `What's the title of the project?`,
            name: `Title`
        }, {
            type: `input`,
            message: `Description of the project`,
            name: `Description`
        }, {
            type:`input`,
            message: `What are the contents of the project?`,
            name: `Table of Contents`
        }, {
            type: `input`,
            message: `How do you install the app?`,
            name: `Installation`
        }, {
            type:`input`,
            message: `How do you use your app?`,
            name: `Usage`
        }, {
            type:`list`,
            message: `What license did you use?`,
            name: `License`,
            choices:['MIT License', 'The GPL License', 'Apache License', 'GNU license', 'N/A']
        }, {
            type:`input`,
            message: `Guidelines for further contribution`,
            name: `Contributing`
        }, {
            type:`input`,
            message: `Test instructions`,
            name: `Tests`
        }, {
            type:`input`,
            message: `For questions (Github)?`,
            name: `Github`
        }, {
            type:`input`,
            message: `For questions (E-mail)?`,
            name: `Email`
        }
]



//function to write README file
function writeToFile(content) {
    fs.writeFile("README.md", content, () => console.log("Successfully created README."));
}

//function to initialize app
function init() {
    return inquirer.prompt(questions).then((data) => {
        const content = generateMarkdown(data);
        writeToFile(content);
    });
}


// Function call to initialize app
init();
