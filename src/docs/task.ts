import { createDoc } from '@cig-platform/docs'
import { storeTaskSchema } from '@Schemas/TaskSchemas'

const taskDocs = {
  ...createDoc('/tasks', ['Task'], [
    {
      method: 'post',
      title: 'Register task',
      objectSchema: storeTaskSchema
    } 
  ])
}

export default taskDocs
