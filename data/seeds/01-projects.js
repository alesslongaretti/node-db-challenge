
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('projects').truncate()
        .then(function () {
          return knex('projects').insert([
            {
              project_name: 'Homework', description: 'do homework over the weekend', completed: false
            },
            {
              project_name: 'Walk the dog', description: 'walk the dog in the evening', completed: false
            },
            {
              project_name: 'Pray', description: 'Pray before you go to sleep', completed: true
            }
          ]);
        });
};
