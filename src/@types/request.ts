import { Request } from 'express'

import TaskEntity from '@Entities/TaskEntity'

export type UpdateTaskRequest = Request & {
  task?: TaskEntity;
}
