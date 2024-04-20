import {
  body,
  header,
  param,
  query,
  ValidationChain,
  validationResult,
} from 'express-validator'
import { Request, Response, NextFunction } from 'express'

const validateParams =
  (validations: ValidationChain[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    await Promise.all(validations.map((validation) => validation.run(req)))

    const errors = validationResult(req)

    return errors.isEmpty()
      ? next()
      : res.status(400).json({ errors: errors.array() })
  }

export { body, header, param, query, validateParams }
