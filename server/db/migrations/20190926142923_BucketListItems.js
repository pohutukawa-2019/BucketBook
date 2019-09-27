exports.up = (knex, Promise) => {
  return knex.schema.createTable('BucketListItems', table => {
    table.increments('id')
      .primary()
    table.string('title')
    table.integer('country_id')
      .references('Countries.id')
      .onDelete('CASCADE')
    table.integer('user_id')
      .references('Users.id')
      .onDelete('CASCADE')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('BucketListItems')
}