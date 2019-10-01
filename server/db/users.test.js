const env = require('./test-environment')
const db = require('./users')

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
      .then(name => {
        const actual = name
        expect(actual).toBeTruthy()
        expect(actual).not.toBeNull()
      })
  })

  it('createUser returns a new user', () => {
    expect.assertions(2)

    const newUser = {
      username: 'john'
    }

    return db.createUser(user, testDb)
      .then(name => {
        expect(name.id).toBeTruthy(5)
        expect(actual).not.toBeNull()
      })
  })
})