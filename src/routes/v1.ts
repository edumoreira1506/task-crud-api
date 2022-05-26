import express from 'express'
import { withBodyValidation } from '@cig-platform/core'

import TaskController from '@Controllers/TaskController'
import { storeTaskSchema, updateTaskSchema } from '@Schemas/TaskSchemas'
import withTaskParam from '@Middlewares/withTaskParam'

const router = express.Router()

router.post(
  '/tasks',
  withBodyValidation(storeTaskSchema),
  TaskController.store
)

router.get(
  '/tasks',
  TaskController.index
)

router.patch(
  '/tasks/:taskId',
  withTaskParam,
  withBodyValidation(updateTaskSchema),
  TaskController.update
)

router.delete(
  '/tasks/:taskId',
  withTaskParam,
  TaskController.remove
)

export default router
