const env = require('./test-environment')
const db = require('./users')
// const { generateHash } = require('authenticare/server')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

describe('Database functions for users', () => {
  it('getUserByName returns a users name', () => {
    expect.assertions(1)

    const userName = 'bob'

    return db.getUserByName(userName, testDb)
      .then(name => {
        expect(name.username).toBe(userName)
      })
  })

  it('userExists checks if a user exists', () => {
    expect.assertions(2)

    const username = 'bob'

    return db.userExists(username, testDb)
      .then(boolean => {
        const actual = boolean
        expect(actual).toBeTruthy()
        expect(actual).not.toBeNull()
      })
  })

  // it('createUser returns a new user', () => {
  //   // expect.assertions(2)

  //   const newUser = {
  //     username: 'john',
  //     password: generateHash(password)
  //   }

  //   return db.createUser(newUser, testDb)
  //     .then(([newId]) => {
  //       expect(newId).toBe(4)
  //     })
  //     .then()
  // })
})