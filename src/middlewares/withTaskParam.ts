import { withRequestParam } from '@cig-platform/core'

import Task from '@Entities/TaskEntity'
import TaskRepository from '@Repositories/TaskRepository'

export default withRequestParam<Task>('taskId', 'task', TaskRepository)
