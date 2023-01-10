import express from "express";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


export const findMany = async()=>{
    return await prisma.product.findMany({});
}


export const findById = async(id)=>{
     return await prisma.product.findUnique({where :{id : Number(id)}})
}

export const findByName = async (name)=>{
    name = name.toLowerCase();
    return await prisma.product.findFirst({where :{name : name}})
}




export const count = async()=>{
    return await prisma.product.count();
}



export const save = async(product = {})=>{
    product.name = product.name.toLowerCase().trim();
    return await prisma.product.create({ data : product  });
}
export const update = async (id , data)=>{
    return await prisma.product.update({where : {id : Number(id)} , data : data})
} 

export const deleteById = async (id)=>{
     return await prisma.product.delete({where :{id : Number(id)}})
}

export const deleteAll = async()=>{     
    return await prisma.product.deleteMany({});
}



