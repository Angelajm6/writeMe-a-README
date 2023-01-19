class MarkDown {
  static generateReadme(answers) {
    return `

# ${data.title}
http://github.com/${data.Username}/${data.title}

#Description
${data.Description}

## Table of Contents
- [Project description] (#Description)
- [Installation] (#Installation)
- [Usage] (#Usage)
- [License] (#License)
- [Contribution] (#Contributing)
- [Tests] (#Tests)
- [Questions] (#Questions)

## Description
${answers.description}

##Installation
The following necessary dependencies must be installed to be able to run this application.
${answers.installation}

##Usage
In order to use this app, ${answers.Usage}

##License
This project is licensed under the ${answers.License} license. 

##Contributing
Contributors: ${answers.Contributing}

##tests
In order to urun the test, ${data.Tests} is needed.

##Questions
If you have any questions about the repo or the project usage, please open an issue or contact me!
${answers.email}
${answers.github}

`
  }
}

module.exports = MarkDown