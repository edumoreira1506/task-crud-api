import { createDoc } from '@cig-platform/docs'
import { storeTaskSchema } from '@Schemas/TaskSchemas'

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
  ])
}

export default taskDocs
