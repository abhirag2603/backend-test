import express from 'express'
import cors from 'cors'
import cookieParser from 'cookieparser'

const app=express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))//CROSS ORIGIN REQUEST URL

app.use(express.json({
    limit:"16kb"
}))  //JSON LIMIT

app.use(express.urlencoded({
    extended:true,limit:"16kb"
}))   //TAKE FROM ANY URL

app.use(express.static("public"))  //STORE TEMPORARY FILES

app.use(cookieParser())  //ACCESS MODIFY COOKIES

export{ app }