import Joi from 'joi';
import { apiRequestException } from '../middleware/apiException.js';



export const validateUtil = (paloud  , schema )=>{
    const {error , value} =  Joi.validate(paloud , schema);
    if(error) return  apiRequestException(error.details[0].message , 406)
} 




