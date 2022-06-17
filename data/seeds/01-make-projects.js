const projects = [
  {
    project_name: 'Learn JS',
    project_description: 'lorem ipsum, js',
    project_completed: true
  },
  {
    project_name: 'Learn Node',
    project_description: 'lorem ipsum, node',
    project_completed: false
  }
]

const resources = [
  {
    resource_name: 'codecademy access',
    resource_description: 'check with admin'
  },
  {
    resource_name: 'node v. 16',
    resource_description: 'must be installed'
  }
]

const tasks = [
  {
    task_description: 'Intro course on Codecademy',
    task_notes: 'chapters 1-10',
    task_completed: true,
    project_id: 1
  },
  {
    task_description: 'Node repl practice',
    task_notes: 'check docs',
    task_completed: false,
    project_id: 2
  }
]

const project_resources = [
  {
    project_id: 1,
    resource_id: 1
  },
  {
    project_id: 2,
    resource_id: 2
  }
]


exports.seed = async function(knex) {
  await knex('projects').insert(projects);
  await knex('resources').insert(resources);
  await knex('tasks').insert(tasks);
  await knex('project_resources').insert(project_resources);
};
