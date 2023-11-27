//  function that returns a license badge based on which license is passed in
//  no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return ` ![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
  }
  return "";
}

//  function that returns the license link
//  no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `\n[License](*license)\n`;
  }
  return "";
}

// function that returns the license section of README
// no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License

      Licensed under the ${license} license.`;
  }
  return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.name}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [Description](#description)
  * [Requirements](#requirements)
  * [Usage](#usage)
  * [Contact-Me](#contact-me)
  * [Contributors](#contributors)
  * [Testing](#testing)
  ${renderLicenseLink(data.license)}
  ## Description
  ${data.description}
  ## Requirments
  ${data.require}
  ## Usage
  ${data.usage}
  ## Contact-Me
  * Name - ${data.name}
  * Email - ${data.email}
  * Github - [${data.creator}](https://github.com/${data.creator}/)
  ## Contributors
  ${data.contributors}
  ## Testing
  \`\`\`
  ${data.test}
  \`\`\`
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
