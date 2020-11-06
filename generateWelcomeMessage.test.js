const generateWelcomeMessage = require(`./generateWelcomeMessage`)

test(`should return the correct output`, () => {
  expect(generateWelcomeMessage(`Min`,12)).toBe
  (`Welcome home Min~~ <3, this is your visit number 12`)
})
