const Manager = require("../lib/Manager");

const managerHTML = function (manager) {
  return `<div class="col myCard">
    <div class="card" style="width: 18rem">
      <div class="card-header role">Manager: ${manager.name}</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item attribute">Manager ID:${manager.id}</li>
        <li class="list-group-item attribute">Manager Email:${manager.email}</li>
        <li class="list-group-item attribute">Manager Office Number:${manager.officeNumber}</li>
      </ul>
    </div>
  </div>`;
};

const internHTML = function (intern) {
  return `<div class="col">
    <div class="card myCard" style="width: 18rem">
      <div class="card-header role">Intern: ${intern.name}</div>
      <ul class="list-group list-group-flush attributes">
        <li class="list-group-item attribute">Intern ID:${intern.id}</li>
        <li class="list-group-item attribute">Intern Email:${intern.email}</li>
        <li class="list-group-item attribute">Intern's School: ${intern.school}</li>
      </ul>
    </div>
  </div>`;
};

const engineerHTML = function (engineer) {
  return `<div class="col">
    <div class="card myCard" style="width: 18rem">
      <div class="card-header role">Engineer: ${engineer.engineer}</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item attribute">Engineer ID:${engineer.id}</li>
        <li class="list-group-item attribute">Engineer Email:${engineer.email}</li>
        <li class="list-group-item attribute">Github Profile Name:${engineer.github}</li>
      </ul>
    </div>
  </div>`;
};


generateHTML = (data) => {
    HTMLarray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
       const managerCard = managerHTML(employee)

      HTMLarray.push(managerCard);
    }
    if (role === "Intern") {
        const internCard = internHTML(employee)

      HTMLarray.push(internCard);
    }
    if (role === "Engineer") {
        const engineerCard = engineerHTML(employee)

      HTMLarray.push(engineerCard);
    }
  }
  const cards = HTMLarray.join('');
  
  const generated = generatePage(cards);
  return generated
};


const generatePage = (cards )=> {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossorigin="anonymous"
        />
        <link rel="stylesheet" href="./style.css">
        <title>Profile Generator</title>
      </head>
      <body>
        <h1 id="team">Team Profile</h1>
        <div class="container text-center employees">
          <div class="row align-items-center">
            ${cards}
          </div>
        </div>
      </body>
    </html>
    `;
};

module.exports = generateHTML