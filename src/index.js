// require('dotenv').config({path: '/.env'}) 
import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/db.js'

dotenv.config({
    path:'/.env'
})
const app=express()


connectDB()
.then(()=>
{
      app.listen(process.env.PORT||8000,()=>{
        console.log(`server is running at port: ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("MONGODB connection failed:",error)
})



//directly connecting db not the best practice
// ;(async()=>{
//     try{
//      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//      app.on("error",(error)=>{
//         console.log("Error:",error)
//         throw error
//      })

//      app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on port ${process.env.PORT}`)
//      })
//     }
//     catch(error){
//         console.error("Error:",error)
//         throw error
//     }
// })()

