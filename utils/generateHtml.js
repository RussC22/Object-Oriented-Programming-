// The function to generate markdown for Html
function generateHtml(data) {
  return `
    # Name
    - Hi, My name is ${data.Name}!
    # Position
      - My current position is ${data.Position}.
  
    ## Contact 
      - The best way to contact me is at ${data.Contact}.
    ## 
    
    ## ManagerInfo
      - My manager is ${data.ManagerInfo}
    ## Usage
      - In order to use this app, ${data.Usage} license.
    ## Contributing
      - Contributors: ${data.Contributing} 
    ## Tests
      - The following is needed to run the test: ${data.Tests}
    ## Questions
      - If you have any questions about the repo, open an issue or contact ${data.Usage}
  `;
}

module.exports = generateHtml;
