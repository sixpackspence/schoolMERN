
import mongoose from 'mongoose';

const postSchema = mongoose.Schema({//this builds us a model to help structure our data
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});//this is creating a schema, a model of sorts
//this spexifies that each post/data has to have these things

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;