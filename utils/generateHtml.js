// The function to generate markdown for README
function generateHtml(data) {
  return `
    # ${data.title}
    https://github.com/${data.Username}/${data.title}
    # Description
      ${data.Description}
  
    ## Table of contents
      ${data.Content}
    ## License
      ${renderLicenseBadge(data.license)}
      ${renderLicenseLink(data.license)}
      ${renderLicenseSection(data.license)}
    ## Installation
      - The following ${
        data.Installation
      } is necessary dependencies must be installed to run the application.
    ## Usage
      - In order to use this app, ${data.Usage} license.
    ## Contributing
      - Contributors: ${data.Contributing} 
    ## Tests
      - The following is needed to run the test: ${data.Tests}
    ## Questions
      - If you have any questions about the repo, open an issue or contact ${
        data.Usage
      }
  `;
}

module.exports = generateHtml;
