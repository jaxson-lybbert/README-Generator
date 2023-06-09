// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";

  if (license == "MIT License") {
    badge =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (license == "GNU GPL") {
    badge =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  } else if (license == "Apache 2.0") {
    badge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  } else if (license == "ISC") {
    badge =
      "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)]";
  } else {
    badge = "";
  }

  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = "";
  if (license == "MIT License") {
    link = "(https://opensource.org/licenses/MIT)";
  } else if (license == "GNU GPL") {
    link = "(https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license == "Apache 2.0") {
    link = "(https://opensource.org/licenses/Apache-2.0)";
  } else if (license == "ISC") {
    link = "(https://opensource.org/licenses/ISC)";
  } else {
    link = "";
  }

  return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSection =
    renderLicenseBadge(license) + renderLicenseLink(license);
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Intallation](#installation)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.install}
  
  ## Usage
  
  ${data.usageInfo}
  
  ## Contributing
  
  ${data.contributionGuide}
  
  ## Testing
  
  ${data.testingInfo}
  
  ## Questions
  If you have any additional questions, feel free to contact me on Github @${
    data.username
  }, or by email: ${data.email}`;
}

module.exports = generateMarkdown;
