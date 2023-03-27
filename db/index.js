const Sequilize = require("sequelize");
const sequelize = new Sequilize("data","root","root",{
    dialect:"mysql",
    host:"127.0.0.1"
})

const Item = require("./item")(sequelize);

module.exports = {
    sequelize:sequelize,
    item:Item
}