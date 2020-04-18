
exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            tbl.increments();
            tbl.text('project_name', 128).notNullable();
            tbl.text('description', 1000);
            tbl.boolean('completed').defaultTo(false);
        })
        .createTable('resources', tbl => {
            tbl.increments();
            tbl.text('resource_name', 128).notNullable().unique();
            tbl.text('description', 1000);
        })
        .createTable('tasks', tbl => {
            tbl.increments();
            tbl.text('description', 1000).notNullable();
            tbl.text('notes', 190);
            tbl.boolean('completed').defaultTo(false);
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE')
        })
        .createTable('projectsResources', tbl => {
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resources')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
            tbl.primary(['project_id', 'resource_id'])
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('projectsResources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects');
};
