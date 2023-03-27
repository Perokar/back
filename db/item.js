const Sequilize = require("sequelize");

module.exports=function(sequelize){
    return sequelize.define("product_data",{
        id:{
            type:Sequilize.INTEGER,
            autoIncrement: true,
            primaryKey:true,
            allowNull:false
        },
        Name:{
            type:Sequilize.STRING,
            allowNull:false
        },
        Description:{
            type:Sequilize.STRING,
            allowNull:false
        },
        Img_path:{
            type:Sequilize.STRING,
            allowNull:false
        },
        Date:{
            type:Sequilize.STRING,
            allowNull:false
        }
    },{timestamps:false,
        tableName:"product_data"
    })
}