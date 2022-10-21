const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        Username: {
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
        comments: "Products"


})

const User = mongoose.model("User", userSchema);
module.exports = User;