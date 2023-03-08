// 
const Manager = require('../lib/Manager')

//
tests('creates a manager object', () => {
    const manager = new Manager('Cole', 55, 'Cole@email.com', 5)

    expect(manager.officeNumber).toEqual(expect.any(Number));
})

test('gets role of employee', () => {
    const manager = new Manager('Cole', 55, 'Cole@email.com')
    
    expect(manager.getRole()).toEqual("Manager")
})