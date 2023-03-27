const {Router} = require('express');
const router = Router();
const fileMiddleware = require("../middleware/file")
const db = require("../db");
const Item = db.item;
router.post("/uploads",fileMiddleware.single('image') ,async (req,resp)=>{
    if (req.body.imgName){
        console.log('test')
        try{
            const dataItem = req.body;
            dataItem.imgName ="/form/img/"+req.body.imgName;
            writeData(dataItem, resp)
        }
        catch(err){
            console.log(err);
            resp.send("Somthing wrong error uploads")
        }
    }
    if(req.body.all){
        try {
            const baseData= await getData()
            resp.json(baseData)
            

        } catch (error) {
            console.log(err)
        }
    }
});

function writeData(data,resp){
    Item.create({
        Name:data.title,
        Description:data.text,
        Img_path:data.imgName,
        Date:data.date
    })
    .then(result=>{
        console.log(result);
       resp.send('ok');
    })
    .catch(err=>{
        console.log("error is"+err)
    })
}
async function getData(filter){

    const getItemsData=await Item.findAll({attributes:['Name','Description','Img_path','Date']});
    
    return JSON.stringify(getItemsData)
   
}
module.exports = router;