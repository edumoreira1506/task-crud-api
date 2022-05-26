import {  BaseRepositoryFunctionsGenerator } from '@cig-platform/core'

import Task from '@Entities/TaskEntity'
import { dataSource } from '@Configs/database'

const BaseRepository = BaseRepositoryFunctionsGenerator<Task>()

const TaskRepository = dataSource.getRepository(Task).extend({
  ...BaseRepository,
  deleteById(id: string) {
    return this.updateById(id, { active: false })
  }
})

export default TaskRepository
