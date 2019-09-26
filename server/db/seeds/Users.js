const { generateHash } = require('authenticare/server')

exports.seed = (knex) => {
  return knex('Users').del()
    .then(() => Promise.all([
      generateHash('bob'),
      generateHash('george'),
      generateHash('jeffery')
    ]))
    .then(([bobHash, georgeHash, jefferyHash]) =>
      knex('Users').insert([
        { id: 1, username: 'bob', hash: bobHash },
        { id: 2, username: 'george', hash: georgeHash },
        { id: 3, username: 'jeffery', hash: jefferyHash }
      ])
    )
}
