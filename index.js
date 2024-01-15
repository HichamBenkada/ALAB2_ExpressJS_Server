const express = require('express');
const app = express();
const router = express.Router();
const PORT = 5500;

//----- importing users routes:
const usersRouter = require("./routes/users");

//----- importing file sytem:
const fs = require('fs');
//----- Tamplate Engines:
//default
app.engine("perscholas",(filePath, options, callback)=>{
    fs.readFile(filePath,(err,content)=>{
        if(err) return callback(err)
        const rendered =content
    .toString()
    .replaceAll('#title#',`${options.title}`)
    .replace('#content#',`${options.content}`);
    return callback(null, rendered)
    });
});


// // set the view engine to ejs
// app.set('view engine', 'ejs');

//---- After middleware we call routes:
app.use('/users',usersRouter); //redirect requests for users paths to users router
app.get("/",(req,res)=>{
    res.send("Helle! Mr. Benkada, You are freaking awesome!...")
});

// about page
app.get('/about', (req, res) {

});





app.listen(PORT, ()=>{
    console.log(`Hicham Server is waiting for clients call on port ${PORT}`)
});