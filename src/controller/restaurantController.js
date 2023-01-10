import express from "express";
import { getAllRestaurant , saveRestaurant , getRestaurantById, updateRestaurant, deleteRestaurant, totalRestaurant, deleteAllRestaurant } from "../service/restaurantService.js";

const router = express.Router();


router.get('/total' ,async (req,res , next)=>{
        const totalRestaurants = await  totalRestaurant();
        res.send(totalRestaurants.toString());
})

router.get('/', async(req,res,next)=>{
        const restuarants = await getAllRestaurant()
        res.send(restuarants);   
})

router.get('/:id' ,async(req,res , next)=>{
        const {id} = req.params ;
        const findRestaurants =await getRestaurantById(id);
        res.send(findRestaurants);
})

router.post('/' ,async(req,res , next)=>{
        const restaurant =  await saveRestaurant(req.body) ;
        res.send(restaurant);
})

router.put('/:id' ,async(req,res,next)=>{
        const {id} = req.params ;
        const restaurant = await updateRestaurant(id , req.body);
        res.send(restaurant)
})


router.delete('/deleteAll' ,async (req,res,next)=>{ 
        const restaurant = await deleteAllRestaurant();
        res.send(restaurant);
})


router.delete('/:id' ,async(req,res,next)=>{
        const {id} = req.params ;
        const restaurant = await deleteRestaurant(id);
        res.send(restaurant);
})



export default router