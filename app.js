const express = require('express');
const app = express();
const PORT =2000;
const path = require("path");
app.use(express.static(path.join(__dirname,'form')));
app.use (express.json({extended:true}))
app.use ('/api', require("./routs/routs"));

app.set('views', path.join(__dirname, 'form'));
app.engine('html', require('ejs').renderFile)
app.get("/", (req,res)=>{
    res.render("from.html")
})
app.listen(PORT,()=>console.log('Server start work on port 2000')); 