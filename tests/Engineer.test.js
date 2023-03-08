const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer("Cole", 55, "Cole@email.com", "githubcole");

  expect(engineer.github).toEqual(expect.any(String));
});

test("get the engineer role", () => {
  const engineer = new Engineer("Cole", 55, "Cole@email.com", "githubcole");

  expect(engineer.getRole()).toEqual("Engineer");
});

test("return the github of the engineer", () => {
  const engineer = new Engineer("cole", 55, "Cole@gmail.com", "githubcole");

  expect(
    engineer
      .getGithub()
      .toEqual(expect.stringContaining(engineer.github.toString()))
  );
});
