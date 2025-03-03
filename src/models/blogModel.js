import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
        trim: true
    },
    description: { 
        type: String, 
        required: true,
        trim: true 
    }
}, { timestamps: true }); // Adds createdAt and updatedAt fields

const BlogModel = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

export default BlogModel;
