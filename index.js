const express = require('express');
const app = express();
const PORT = 5500;

app.get("/",(req,res)=>{
    res.send("Helle! Mr. Benkada, You are freaking awesome!...")
});







app.listen(PORT, ()=>{
    console.log(`Hicham Server is waiting for clients call on port ${PORT}`)
});