const Employee = require("../lib/Employee");

test("get the name of the employee", () => {
    const employee = new Employee("Cole", 55, "cole@gmail.com")

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()))
})

test("get the ID of the employee", () => {
    const employee =  new Employee("Cole", 55, "cole@gmail.com")

    expect(employee.getId()).toEqual(expect.any(Number))
})

test("get the email of the employee", () => {
    const employee =  new Employee("Cole", 55, "cole@gmail.com")

    expect(employee.getEmail()).toEqual(expect.any(String))
})

test("gets the role of the employee", () =>{
    const employee =  new Employee("Cole", 55, "cole@gmail.com")

    expect(employee.getRole()).toEqual("Employee")
})