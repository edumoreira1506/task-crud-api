import { Request, Response } from 'express'
import { BaseController } from '@cig-platform/core'

import i18n from '@Configs/i18n'
import TaskBuilder from '@Builders/TaskBuilder'
import TaskRepository from '@Repositories/TaskRepository'

class TaskController  {
  constructor() {
    this.store = this.store.bind(this)
    this.index = this.index.bind(this)
  }

  @BaseController.errorHandler()
  async store(req: Request, res: Response): Promise<Response> {
    const taskDTO = new TaskBuilder()
      .setContent(req.body.content)
      .setFinished(false)
      .build()

    const task = await TaskRepository.save(taskDTO)

    return BaseController.successResponse(res, { task, message: i18n.__('messages.success') })
  }

  @BaseController.errorHandler()
  async index(req: Request, res: Response): Promise<Response> {
    const tasks = await TaskRepository.all()

    return BaseController.successResponse(res, { tasks, message: i18n.__('messages.success') })
  }
}

export default new TaskController()
