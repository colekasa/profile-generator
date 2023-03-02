const inquirer = require("inquirer");
const fs = require("fs");

const profileGenerator = ({
    
})

inquirer
.prompt([
    {
        type:"list",
        message:"What is your employee role at the company?",
        name:"role",
        choices:["Manager","Intern","Engineer"],
    },
   
])

.then((response) => {
    const index = profileGenerator(response);

    fs.writeFile("index.html", index, (err) => 
    err ? console.log(err) : console.log("Your profile has been created!"))
})