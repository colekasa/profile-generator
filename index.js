const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const employees = []

let managerPrompt = () => { return inquirer.prompt([
    {
        type:"input",
        message:"What is your Manager's name?",
        name:"managerName",
    },
    {
        type:"input",
        message:"What is your Manager's employee ID?",
        name:"managerID",
    },
    {
        type:"input",
        message:"What is your Manager's Email?",
        name:"managerEmail",
    },
    {
        type:"input",
        message:"What is your Manager's office number?",
        name:"managerNumber",
    },
])

.then((data) => {
    // saving the manager data 
    let employee = new Manager(data.managerName,data.managerID,data.managerEmail,data.managerNumber)
    employees.push(employee)
    console.log(employee)
})
}
let employeePrompt = () => {
     return inquirer.prompt ([
        {
            type:"list",
            message:"Who else would you like to add to your team profile?",
            name:"newEmployee",
            choices: ["Intern", "Engineer"]
        },
        {
            type:"input",
            message:"What is your employee name?",
            name:"name",
        },
        {
            type:"input",
            message:"What is your employee ID number?",
            name:"id",
        },
        {
            type:"input",
            message:"What is your employee email?",
            name:"email",
        },
        {
            type:"input",
            message:"What is your engineer's github?",
            name:"github",
            when: (list) => list.newEmployee === "Engineer"
        },
        {
            type:"input",
            message:"What school does your intern attend?",
            name:"school",
            when: (list) => list.newEmployee === "Intern",
        },
        {
            type: "confirm",
            name: "confirmAddEmployee",
            message: "Would you like to add more team members?",
            default: false
        }
    ])
    .then((newData) => {
        let {name, id, email, role, github, school, confirmAddEmployee} = newData
        let employee;

        if (role === "Engineer"){
            employee = new Engineer(name,id, email, github)
            console.log(employee)
        }
        else if (role === "Intern"){
            employee = new Intern(name, id, email, school)
            console.log(employee)
        }       
        
        employees.push(employee)
        
        if(confirmAddEmployee){
            return employeePrompt(employees);
        }
        else{
            return employees;
        }
    })
}


const writeFile = data =>{
    fs.writeFile('./dist/index.html', data, err => {
        if (err){
            console.log(err)
            return;
        }
        else{
            console.log("Successfully created your teams profile!")
        }
    })
}


managerPrompt()
 .then(employeePrompt)
//  .then(employees => {
//     return generateHTML(employees)
//  })
//  .then(generateHTML => {
//     return writeFile(generateHTML)
//  })
//  .catch(err => {
//     console.log(err)
//  });


