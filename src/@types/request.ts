import { Request } from 'express'

import TaskEntity from '@Entities/TaskEntity'

export type TaskRequest = Request & {
  task?: TaskEntity;
}
