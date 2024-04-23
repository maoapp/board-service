import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { createUserHandler } from '../handlers/createUserHandler';
import { loginUserHandler } from '../handlers/loginUserHandler';
import { body, validateParams } from '../middleware/validateParams'

export const authController = Router()
  .post(
    '/signup',
    validateParams(
      [
        body('email').isString(),
        body('password').isString().isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
      ]
    ),
    createUserHandler
  )
  .post(
    '/login',
    loginUserHandler
  )
