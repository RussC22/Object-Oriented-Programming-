// template html and generation of data from type of employee
function generateHtml(data) {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
    crossorigin="anonymous"
  />
      <title>My Team</title>
    </head>
    <body>
      <h1>My Team</h1>
      <main class="container d-flex">
          ${generateTeam(data)};
      </main>
    </body>
  </html>
  `;
}
// loops based on type of employee or team members and card creation
function generateTeam(data) {
  let html = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i].getRole() === "Manager") {
      html += `<div class="card">
      <div class="card-header text-bg-primary p-3 style="width: 18rem;"><h2>${data[
        i
      ].getName()}</h2>
      <h2>Manager</h2></div>
      <div class="card-body">
        <p>ID: ${data[i].getId()}</p>
        <p>Email: <a href="mailto:${data[i].getEmail()}">
          ${data[i].getEmail()}
        </a></p>
        <p>
          Office Number: ${data[i].getofficeNumber()}
        </p>
      </div>
  </div>`;
    }
    if (data[i].getRole() === "Engineer") {
      html += `<div class="card"><div class="card-header text-bg-primary p-3 style="width: 18rem;">
      <h2>${data[i].getName()}</h2>
      <h2>Engineer</h2></div>
      <div class="card-body">
        <p>ID: ${data[i].getId()}</p>
        <p>Email: <a href="mailto:${data[i].getEmail()}">
          ${data[i].getEmail()}
        </a></p>
        <p>
          Github Username: <a href="https://github.com/${data[i].getGithub()}">
            ${data[i].getGithub()}
          </a>
        </p>
      </div>
  </div>
  `;
    }
    if (data[i].getRole() === "Intern") {
      html += `<div class="card"><div class="card-header text-bg-primary p-3 style="width: 18rem;">
      <h2>${data[i].getName()}</h2>
      <h2>Intern</h2></div>
      <div class="card-body">
        <p>ID: ${data[i].getId()}</p>
        <p>Email: <a href="mailto:${data[i].getEmail()}">
          ${data[i].getEmail()}
        </a></p>
        <p>
         School Name: ${data[i].getSchool()}
        </p>
      </div>
  </div>`;
    }
  }
  return html;
}
// exports card to html
module.exports = generateHtml;
