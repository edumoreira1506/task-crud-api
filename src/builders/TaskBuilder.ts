import Task from '@Entities/TaskEntity'

export default class TaskBuilder {
  private _id: string
  private _content: string
  private _finished: boolean

  setFinished(finished: boolean): TaskBuilder {
    this._finished = finished

    return this
  }

  setContent(content: string): TaskBuilder {
    this._content = content

    return this
  }

  setId(id: string): TaskBuilder {
    this._id = id

    return this
  }

  build = () => {
    const task = new Task()

    task.content = this._content
    task.finished = this._finished

    if (this._id) {
      task.id = this._id
    }

    return task
  }
}
