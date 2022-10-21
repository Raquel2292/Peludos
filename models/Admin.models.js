const { Schema, model } = require("mongoose");

const adminSchema = new Schema(
    {
        Admin: {
            name: String,
            email:{
                type: String,
                required: true,
                unique: true
            } 
        
        },
        password:{
            type: String,
            required: true,
            unique: true

        },
        photo: String,
        id: "ObjectId",
        ref: "Admin"

})

const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
