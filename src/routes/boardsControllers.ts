import { Router } from 'express'
import { getTasksByUserHandler } from '../handlers/getTasksByUserHandler'
import { body, param, validateParams } from '../middleware/validateParams'
import { createTaskHandler } from '../handlers/createTaskHandler'
import { updateTaskHandler } from '../handlers/updateTaskHandler'

// TODO Add auth token and remove user from params
export const boardsController = Router()
  .get(
    '/:userId',
    getTasksByUserHandler,
  )
  .post(
    '/:userId',
    validateParams(
      [
        body('title').isString(),
        body('content').isString(),
        body('status').isString(),
      ]
    ),
    createTaskHandler,
  )
  .patch(
    '/:userId/:taskId',
    updateTaskHandler,
  )
