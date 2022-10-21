const MongoStore = require("connect-mongo");
const { Schema, model } = require("mongoose");

const productsSchema = new Schema(
    {
        Products: {
            name: String,
            description: String,
            type:["alimentacion, snacks, accesorios, saludEhigiene"],
            comments:[{
                type: mongoose.Schema.Types.ObjectId,
                ref:"Products"

            }]
        
        },
        
        

})

const Products = mongoose.model("Products", productsSchema);
module.exports = Products;


