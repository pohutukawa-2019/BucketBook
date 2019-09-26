exports.up = (knex, Promise) => {
  return knex.schema.createTable('Users', table => {
    table.increments('id')
      .primary()
    table.string('username')
    table.binary('hash')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('Users')
}