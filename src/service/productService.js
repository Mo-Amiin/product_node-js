import {findMany ,findById ,save ,update ,deleteById, count, deleteAll, findByName} 
     from '../repository/productRepo.js'
import {productSchema, } from '../utility/validation-schema.js'
import {validateUtil} from '../utility/utility.js'
import { apiRequestException } from '../middleware/apiException.js';



export const getAllProducts = async()=>{
    return await findMany();
}

export const totalProducts = async ()=>{
    return await count();
}

export const  getProductById =async (id)=>{
    const isExist = await findById(id);
    if(!isExist) return  apiRequestException("id is not found" , 404)
    return await findById(id);
}


export const saveProduct =async (product={})=>{
    const isExist = await findByName(product.name.trim());
    if(isExist) return apiRequestException('this Product is already Exist' , 406)
    return  (await validateUtil(product  , productSchema) ||
         await save(product)) ; 
}



export const updateProduct= async(id , product)=>{
    const isExist = await findById(id);
    if(!isExist) return  apiRequestException("id is not found" , 404)
    return  ( await validateUtil(product  , productSchema) ||  await update(id , product)) ; 
}


export const deleteProduct = async (id)=>{
    const isExist = await findById(id);
    if(!isExist) return  apiRequestException("id is not found" , 404)
    return  await deleteById(id)   ;
}


export const deleteAllProducts = async ()=>{
    return await deleteAll();
}

