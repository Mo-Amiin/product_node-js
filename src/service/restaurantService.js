import {findMany ,findById ,save ,update ,deleteById, count, deleteAll, findByName} 
     from '../repository/restaurantRepo.js'
import {restaurantSchema} from '../utility/validation-schema.js'
import {validateUtil} from '../utility/utility.js'
import { apiRequestException } from '../middleware/apiException.js';



export const getAllRestaurant = async()=>{
    return await findMany({});
}

export const totalRestaurant = async ()=>{
    return await count();
}

export const  getRestaurantById =async (id)=>{
    const isExist = await findById(id);
    if(!isExist) return  apiRequestException("id is not found" , 404)
    return await findById(id);
}


export const saveRestaurant =async (restaurant={})=>{
    const isExist = await findByName(restaurant.name.trim())
    if(isExist) return apiRequestException('this restaurant is already Exist')
    return  (await  validateUtil(restaurant  , restaurantSchema) ||
         await save(restaurant)) ; 
}


export const updateRestaurant = async(id , restuarant)=>{
    const isExist = await findById(id);
    if(!isExist) return  apiRequestException("id is not found" , 404)
    return  ( await validateUtil(restuarant  , restaurantSchema) ||  await update(id , restuarant)) ; 
}


export const deleteRestaurant = async (id)=>{
    const isExist = await findById(id);
    if(!isExist) return  apiRequestException("id is not found" , 404)
    return  await deleteById(id)   ;
}


export const deleteAllRestaurant = async ()=>{
    return await deleteAll();
}

