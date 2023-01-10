import Joi from 'joi'



export const restaurantSchema = {
    name : Joi.string().max(30).min(5).trim().required(),
    place : Joi.string().max(20).min(3).trim().required(),
    productId : Joi.number().min(1).optional(),
}

export const productSchema = {
    name : Joi.string().max(20).min(5).required(),
    restaurantId : Joi.number().min(1).optional(),
    categoryId : Joi.number().min(1).optional(),
}


export const categorySchema = {
    name : Joi.string().max(20).min(5).required(),
}


