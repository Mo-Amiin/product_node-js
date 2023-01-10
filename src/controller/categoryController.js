import express from "express";
import { getAllCategories ,getCategoryById ,saveCategory ,deleteAllCategories ,
         deleteCategory ,totalCategory ,updateCategory } from "../service/categoryService.js";

const router = express.Router();


router.get('/total' ,async (req,res , next)=>{
        const totalCategories = await  totalCategory();
        res.send(totalCategories.toString());
})

router.get('/', async(req,res,next)=>{
        const category = await getAllCategories()
        res.send(category);   
})

router.get('/:id' ,async(req,res , next)=>{
        const {id} = req.params ;
        const findCategory =await getCategoryById(id);
        res.send(findCategory);
})

router.post('/' ,async(req,res , next)=>{
        const category =  await saveCategory(req.body) ;
        res.send(category);
})

router.put('/:id' ,async(req,res,next)=>{
        const {id} = req.params ;
        const category = await updateCategory(id , req.body);
        res.send(category)
})


router.delete('/deleteAll' ,async (req,res,next)=>{ 
        const category = await deleteAllCategories();
        res.send(category);
})


router.delete('/:id' ,async(req,res,next)=>{
        const {id} = req.params ;
        const category = await deleteCategory(id);
        res.send(category);
})



export default router