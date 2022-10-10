//jshint esversion:8
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
const dotenv=require('dotenv');
dotenv.config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded(({extended:true})));
app.use(cors());
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});
app.get('/',(req,res)=>{
    res.send('Backend Setup');
});
mongoose.connect(process.env.DATABASE_URL).then(()=>{console.log("Connected to the database!");}).catch((err)=>{console.log(err);});