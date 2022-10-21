const { Schema, model } = require("mongoose");

const commentsSchema = new Schema(
    {
       
    Comments:{
        type: String,
        
    },
    
    
})

{
    timestamps: true
}

const Comments = mongoose.model("Comments", commentsSchema);
module.exports = Comments;
