
exports.seed = function(knex) {
  // Inserts seed entries
  return knex('tasks').truncate()
    .then(function () {
      return knex('tasks').insert([
        {
          description: 'Database Schema Design', notes: 'do homework over the weekend', completed: true, project_id: 1
        },
        {
          description: 'Multi-Table Queries', notes: 'do homework over the weekend', completed: true, project_id: 1
        },
        {
          description: 'Data Modeling', notes: 'do homework over the weekend', completed: false, project_id: 1
        },
        {
          description: 'Walk the dog', notes: 'do it at night', completed: false, project_id: 2
        },
        {
          description: 'pray at night', notes: 'for the family', completed: true, project_id: 3
        }

      ]);
    });
};