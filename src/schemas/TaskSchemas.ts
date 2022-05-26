import Joi from 'joi'

const contentSchema = Joi.string().min(3).max(250)
const finishedSchema = Joi.boolean()

export const storeTaskSchema = Joi.object({
  content: contentSchema.required()
}).options({ abortEarly: false })

export const updateTaskSchema = Joi.object({
  content: contentSchema,
  finished: finishedSchema
})
