exports.up = (knex, Promise) => {
  return knex.schema.createTable('Countries', table => {
    table.increments('id')
      .primary()
    table.string('name')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('Countries')
}