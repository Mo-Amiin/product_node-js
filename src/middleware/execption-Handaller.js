import winston from 'winston'

export default  function execptionHandaller(err , req,res , next){
   winston.error(err.message , err )
   res.status(err?.statusCode ?? 500).json({
      success : false ,
      message :err.message
   })
}


