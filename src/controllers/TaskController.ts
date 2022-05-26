import { Request, Response } from 'express'
import { BaseController, NotFoundError } from '@cig-platform/core'

import i18n from '@Configs/i18n'
import TaskBuilder from '@Builders/TaskBuilder'
import TaskRepository from '@Repositories/TaskRepository'
import { UpdateTaskRequest } from '@Types/request'

class TaskController  {
  constructor() {
    this.store = this.store.bind(this)
    this.index = this.index.bind(this)
    this.update = this.update.bind(this)
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

  @BaseController.errorHandler()
  @BaseController.actionHandler(i18n.__('messages.updated'))
  async update(req: UpdateTaskRequest): Promise<void> {
    const task = req.task

    if (!task) throw new NotFoundError()

    const newTask = { ...task, ...req.body }
    const taskDTO = new TaskBuilder()
      .setContent(newTask.content)
      .setFinished(newTask.finished)
      .setId(newTask.id)
      .build()

    await TaskRepository.update({ id: task.id }, taskDTO)
  }
}

export default new TaskController()
