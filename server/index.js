const express = require('express')
const app = express()
const PORT = 5000




app.listen(PORT,(req,res) =>{
    console.log(`Server Is running on ${PORT}`);
})