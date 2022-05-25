import Joi from 'joi'

export const storeTaskSchema = Joi.object({
  content: Joi.string().required().min(3).max(250)
}).options({ abortEarly: false })
