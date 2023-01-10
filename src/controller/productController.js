import express from "express";
import { append } from "express/lib/response";
import { getAllProducts ,getProductById ,saveProduct ,deleteProduct ,deleteAllProducts  ,
      updateProduct, totalProducts } from "../service/productService.js";

const router = express.Router();



router.get('/total' ,async (req,res , next)=>{
        const totalProduct = await  totalProducts();
        res.send(totalProduct.toString());
})

router.get('/', async(req,res,next)=>{
        const product = await getAllProducts()
        res.send(product);   
})

router.get('/:id' ,async(req,res , next)=>{
        const {id} = req.params ;
        const findProduct =await getProductById(id);
        res.send(findProduct);
})

router.post('/' ,async(req,res , next)=>{
        const product =  await saveProduct(req.body) ;
        res.send(product);
})

router.put('/:id' ,async(req,res,next)=>{
        const {id} = req.params ;
        const product = await updateProduct(id , req.body);
        res.send(product)
})


router.delete('/deleteAll' ,async (req,res,next)=>{ 
        const product = await deleteAllProducts();
        res.send(product);
})


router.delete('/:id' ,async(req,res,next)=>{
        const {id} = req.params ;
        const product = await deleteProduct(id);
        res.send(product);
})



export default router