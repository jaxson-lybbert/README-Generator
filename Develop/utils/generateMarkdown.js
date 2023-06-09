// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  Attach license badge here
  
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
  If you have any additional questions, feel free to contact me on Github @${data.username}.
  Or by email: ${data.email}`;
}

module.exports = generateMarkdown;
