exports.seed = function(knex) {
  return knex('BucketListItems').del()
    .then(function () {
      return knex('BucketListItems').insert([
        { id: 1, title: 'Swim', completed: 0, country_id: 1, user_id: 1 },
        { id: 2, title: 'Run', completed: 0, country_id: 2, user_id: 2 },
        { id: 3, title: 'Jump', completed: 0, country_id: 3, user_id: 3 },
        { id: 4, title: 'Sleep', completed: 0, country_id: 2, user_id: 2 }
      ])
    })
}
