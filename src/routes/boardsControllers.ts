import { Router } from 'express'
import { getTasksByUserHandler } from '../handlers/getTasksByUserHandler'
import { body, validateParams } from '../middleware/validateParams'
import { createTaskHandler } from '../handlers/createTaskHandler'
import { updateTaskHandler } from '../handlers/updateTaskHandler'
import { validateToken } from '../middleware/tokenValidation'

// TODO Add auth token and remove user from params
export const boardsController = Router()
  .get(
    '',
    validateToken,
    getTasksByUserHandler,
  )
  .post(
    '',
    validateToken,
    validateParams(
      [
        body('title').isString(),
        body('content').isString(),
        body('status').isString(),
      ]
    ),
    createTaskHandler,
  )
  //TODO Create a patch instead to improve performance operations
  .put(
    '/:taskId',
    validateToken,
    updateTaskHandler,
  )
