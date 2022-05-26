import { Request, Response } from 'express'
import { BaseController, NotFoundError } from '@cig-platform/core'

import i18n from '@Configs/i18n'
import TaskBuilder from '@Builders/TaskBuilder'
import TaskRepository from '@Repositories/TaskRepository'
import { TaskRequest } from '@Types/request'

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

class TaskController  {
  constructor() {
    this.store = this.store.bind(this)
    this.index = this.index.bind(this)
    this.update = this.update.bind(this)
    this.remove = this.remove.bind(this)
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

    await delay(5000)

    return BaseController.successResponse(res, { tasks, message: i18n.__('messages.success') })
  }

  @BaseController.errorHandler()
  @BaseController.actionHandler(i18n.__('messages.updated'))
  async update(req: TaskRequest): Promise<void> {
    const task = req.task

    if (!task) throw new NotFoundError()

    const newTask = { ...task, ...req.body }
    const taskDTO = new TaskBuilder()
      .setContent(newTask.content)
      .setFinished(newTask.finished)
      .setId(newTask.id)
      .build()

    await delay(5000)

    await TaskRepository.update({ id: task.id }, taskDTO)
  }

  @BaseController.errorHandler()
  @BaseController.actionHandler(i18n.__('common.deleted'))
  async remove(req: TaskRequest) {
    const task = req.task

    if (!task) throw new NotFoundError()

    await delay(5000)
    
    await TaskRepository.deleteById(task.id)
  }
}

export default new TaskController()
