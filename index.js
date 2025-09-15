const express = require('express');
const mongoose = require ('mongoose');
const dotenv =require('dotenv');
dotenv.config();
const app= express();
app.use(express.json());

const MONGO_URI=MONGO_URI="mongodb://localhost:27017/studentProjectsDB";
const PORT =3000;

mongoose.connect(MONGO_URI , {
useNewParser:true,
useUnifiedTopology:true,
})

.then(()=>{
  console.log("Connecting to MongoDB");
})

.catch((err)=>{
  console.log(`Error connecting to MongoDB ${err}`);
})

app.listen(PORT ,()=> {
  console.log(`Server is listening at ${PORT}`)
})