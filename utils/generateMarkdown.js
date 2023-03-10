function generateMarkdown(data) {

  return `# ${data.Title}
  ${renderLicenseBadge(data.License)}


# README Generator
${data.Description}

## Table of Contents
* [Description] (#Description)
* [Installation] (#Installation)
* [Usage] (#Usage)
* [License] (#License)
* [Contribution] (#Contributing)
* [Tests] (#Tests)
* [Questions] (#Questions)


## Installation
The following necessary dependencies must be installed to be able to run this application.
${data.Installation}

## Usage
In order to use this app, ${data.Usage}

## License
This project is licensed under the ${data.License}.  

## Contributing
Contributors: ${data.Contributing}

## Tests
In order to invoke this app, run node index.js command. 

## Questions
If you have any questions about the repo or the project usage, please open an issue or contact me!
${data.Email}
${data.Github}

`
  }

  
// function that returns the license link
function renderLicenseLink(license) {
  switch (license) {
    case "agpl-3.0":
    return "https://www.gnu.org/licenses/agpl-3.0";
      
    case "gpl-3.0":
    return "https://www.gnu.org/licenses/gpl-3.0";
      
    case "lgpl-3.0":
    return "https://www.gnu.org/licenses/lgpl-3.0";
      
    case "mpl-2.0":
    return "https://opensource.org/licenses/MPL-2.0";
      
    case "apache-2.0":
    return "https://opensource.org/licenses/Apache-2.0";
        
    case "mit":
    return "https://opensource.org/licenses/MIT";
          
    case "bsl-1.0":
    return "https://www.boost.org/LICENSE_1_0.txt";
            
    case "unlicense":
    return "http://unlicense.org/";    

    case "none":
    return "";
  }
};


// function that returns the license section of README
var licenseDescription
function renderLicenseSection(license) {
  if (license === 'none') {
    return ``;
  } else {
  return `To learn more about the ${license} license, click on the URL provided.`
  }
};


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