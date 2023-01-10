import {findMany ,findById ,save ,update ,deleteById, count, deleteAll, findByName} 
     from '../repository/categoryRepo.js'
import {categorySchema, } from '../utility/validation-schema.js'
import {validateUtil} from '../utility/utility.js'
import { apiRequestException } from '../middleware/apiException.js';



export const getAllCategories = async()=>{
    return await findMany();
}

export const totalCategory= async ()=>{
    return await count();
}

export const  getCategoryById =async (id)=>{
    const isExist = await findById(id);
    if(!isExist) return  apiRequestException("id is not found" , 404)
    return await findById(id);
}


export const saveCategory=async (category={})=>{
    const isExist = await findByName(category.name.trim());
    if(isExist) return apiRequestException('this Category is already Exist' , 406)
    return  (await validateUtil(category  , categorySchema) ||
         await save(category)) ; 
}


export const updateCategory= async(id , category)=>{
    const isExist = await findById(id);
    if(!isExist) return  apiRequestException("id is not found" , 404)
    return  ( await validateUtil(category  , categorySchema) ||  await update(id , category)) ; 
}


export const deleteCategory = async (id)=>{
    const isExist = await findById(id);
    if(!isExist) return  apiRequestException("id is not found" , 404)
    return  await deleteById(id)   ;
}


export const deleteAllCategories = async ()=>{
    return await deleteAll();
}

