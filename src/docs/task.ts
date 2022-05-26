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
    }
  ], {
    pathVariables: [{ type: 'string', name: 'id' }]
  })
}

export default taskDocs
