import express from 'express'
import { withBodyValidation } from '@cig-platform/core'

import TaskController from '@Controllers/TaskController'
import { storeTaskSchema } from '@Schemas/TaskSchemas'

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

export default router
