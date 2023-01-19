function generateMarkdown(data) {

  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

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


##Installation
The following necessary dependencies must be installed to be able to run this application.
${answers.Installation}

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
${answers.Email}
${answers.Github}

`
  }



// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "agpl-3.0":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](${renderLicenseLink(license)})";
      
    case "gpl-3.0":
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](${renderLicenseLink(license))";
      
    case "lgpl-3.0":
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](${renderLicenseLink(license))";
      
    case "mpl-2.0":
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](${renderLicenseLink(license))";
      
    case "apache-2.0":
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${renderLicenseLink(license))";
        
    case "mit":
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(license))";
          
    case "bsl-1.0":
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](${renderLicenseLink(license))";
            
    case "unlicense":
    return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](${renderLicenseLink(license))";

    case "none":
    return "";
  }
};


  
module.exports = generateMarkdown;