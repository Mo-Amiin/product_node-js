import express from "express";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


// export const findMany = async()=>{
//     return await prisma.restaurant.findMany({});
// }

// {include :{products :  {include : {category :true }} } }

export const findMany = async()=>{
     const restaurants = await prisma.restaurant.findMany({include : {products : {include : {category:true}}} })

     const category = await prisma.category.findMany({include : {products : true}})
    return category
}

// const category = await prisma.category.findFirst({include : {products : true}})
//      const product  = await prisma.product.findMany({})


// [
//     restauranID : 20 ,
//     braekfase : [
//         {

//         }
//         {
            
//         }
//     ]
// ]




export const findById = async(id)=>{
     return await prisma.restaurant.findUnique({where :{id : Number(id)}})
}

export const findByName = async (name)=>{
    name = name.toLowerCase();
    return await prisma.restaurant.findFirst({where :{name : name}})
}



export const count = async()=>{
    return await prisma.restaurant.count();
}

export const save = async(restaurant = {})=>{
    restaurant.registered = new Date()
    restaurant.name = restaurant.name.toLowerCase().trim();
    restaurant.place = restaurant.place.trim();
    return await prisma.restaurant.create({ data : restaurant  });
}


export const update = async (id , restaurant)=>{
    restaurant.name = restaurant.name.toLowerCase().trim();
    restaurant.place = restaurant.place.trim();
    return await prisma.restaurant.update({where : {id : Number(id)} , data : restaurant})
} 

export const deleteById = async (id)=>{
     return await prisma.restaurant.delete({where :{id : Number(id)}})
}

export const deleteAll = async()=>{     
    return await prisma.restaurant.deleteMany({});
}



