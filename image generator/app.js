const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const PORT = process.env.PORT || 3000;

const app = express();

//body-parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//static folder
app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use('/openai',require('./routes/openai_routes'))


//server
app.listen(PORT, ()=>{
    try {
        console.log(`server started on ${PORT}`)
    } catch (error) {
        console.log(error)
    }
    
});