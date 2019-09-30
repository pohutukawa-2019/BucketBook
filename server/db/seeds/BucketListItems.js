exports.seed = function(knex) {
  return knex('BucketListItems').del()
    .then(function () {
      return knex('BucketListItems').insert([
        { id: 1, title: 'Swim', country_id: 1, user_id: 1 },
        { id: 2, title: 'Run', country_id: 2, user_id: 2 },
        { id: 3, title: 'Jump', country_id: 3, user_id: 3 },
        { id: 4, title: 'Sleep', country_id: 2, user_id: 2 }
      ])
    })
}
