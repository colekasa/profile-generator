const Intern = require("../lib/Intern");

test("creates an intern object", () => {
  const intern = new Intern("Cole", 55, "Cole@email.com", "UA");

  expect(intern.school).toEqual(expect.any(String));
});

test("gets role of employee", () => {
  const intern = new Intern("Cole", 55, "Cole@email.com", "UA");

  expect(intern.getRole()).toEqual("Intern");
});

test("get the interns school", () => {
  const intern = new Intern("Cole", 55, "cole@email.com", "UA");

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});
