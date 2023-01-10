import express from "express";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


export const findMany = async()=>{
    return await prisma.category.findMany({});
}

export const findByName = async (name)=>{
    name = name.toLowerCase();
    return await prisma.category.findFirst({where :{name : name}})
}


export const findById = async(id)=>{
     return await prisma.category.findUnique({where :{id : Number(id)}})
}


export const count = async()=>{
    return await prisma.category.count();
}

export const save = async(category = {})=>{
    return await prisma.category.create({data:category});
}

export const update = async (id , data)=>{
    return await prisma.category.update({where : {id : Number(id)} , data : data})
} 

export const deleteById = async (id)=>{
     return await prisma.category.delete({where :{id : Number(id)}})
}

export const deleteAll = async()=>{     
    return await prisma.category.deleteMany({});
}



