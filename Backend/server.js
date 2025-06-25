const express=require('express')
const dotenv =require('dotenv')
const connectDB =require('./config/db');
const router = require('./routers/egRouters');
dotenv.config();
const cors=require('cors')

const app=express();
app.use(cors())
const PORT= process.env.PORT;
const todoRoute=require('./routers/todoRouters')
connectDB();

app.use(express.json())
app.use(router)
app.use('/todo',todoRoute)
app.listen( PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
})