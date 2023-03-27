const multer = require("multer");

const storage = multer.diskStorage({
    destination(req,file,cb){
        cb(null, "form/img")
    },
    filename(req,file,cb){
        cb(null, file.originalname )
    }
})
const types=['image/png', 'image/jpg', 'image/jpeg', 'image/tiff'];

const fileFilter = (req,file,cb)=>{
    if (types.includes(file.mimetype)){
        cb(null, true);
    }
    else{
        cb(null,false)
    }
}
module.exports = multer({storage, fileFilter});