import express from "express";
import expressAsyncErrors from 'express-async-errors'
import winston  from 'winston';
import restaurantsController from './controller/restaurantController.js'
import productController from './controller/productController.js'
import categoryController from './controller/categoryController.js'

import  execptionHandaller from './middleware/execption-Handaller.js'


const app = express();

app.use(express.json());

process.on('uncaughtException' , (ex)=>{
    console.log('We got uncaughtException')
    winston.error(ex.message , ex);
})


winston.add(new winston.transports.File({ filename: "logfile.log"}))


app.use('/api/v1/restaurants/' ,restaurantsController );
app.use('/api/v1/products/' ,productController );
app.use('/api/v1/category/' ,categoryController );


app.use(execptionHandaller)






















const PORT  = process.env.PORT || 3000 ;
app.listen(PORT  , ()=>{
    console.log(`Listening on port ${PORT}...`)
})