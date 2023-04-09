import Joi from "joi";

export const ListSchema = Joi.object({
    thing: Joi.string().required(),
    isDone: Joi.bool(),
    createdAt: Joi.date() || Joi.string(),
    updateAt: Joi.date() || Joi.string(),
})