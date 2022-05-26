import { createDoc } from '@cig-platform/docs'
import { storeTaskSchema, updateTaskSchema } from '@Schemas/TaskSchemas'

const taskDocs = {
  ...createDoc('/tasks', ['Task'], [
    {
      method: 'post',
      title: 'Register task',
      objectSchema: storeTaskSchema
    },
    {
      method: 'get',
      title: 'Get tasks'
    }
  ]),
  ...createDoc('/tasks/{id}', ['Task'], [
    {
      method: 'patch',
      title: 'Edit task',
      objectSchema: updateTaskSchema
    },
    {
      method: 'delete',
      title: 'Remove task'
    },
    {
      method: 'get',
      title: 'Get task'
    }
  ], {
    pathVariables: [{ type: 'string', name: 'id' }]
  })
}

export default taskDocs
