exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tb => {
        tb.increments('project_id');
        tb.varchar('project_name', 128).notNullable();
        tb.varchar('project_description', 264);
        tb.boolean('project_completed').notNullable().defaultTo(false);
    })
    .createTable('resources', tb => {
        tb.increments('resource_id');
        tb.varchar('resource_name', 128).notNullable().unique();
        tb.varchar('resource_description', 264);
    })
    .createTable('tasks', tb => {
        tb.increments('task_id');
        tb.varchar('task_description', 128).notNullable();
        tb.varchar('task_notes');
        tb.boolean('task_completed').notNullable().defaultTo(false);
        tb.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects');
    })
    .createTable('project_resources', tb => {
        tb.integer('project_id')
            .unsigned()
            .notNullable()
            .references('project_id')
            .inTable('projects')
        tb.integer('resource_id')
            .unsigned()
            .references('resource_id')
            .inTable('resources')    
        tb.primary(['project_id', 'resource_id'])
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('project_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects');
};
