import PostMessage from "../models/postMessage.js";//this gives us access to our model

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();//find() takes time so this
        //has to be an async/await function
        res.status(200).json(postMessages);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
    //res.send("this works!");//this would be sending it to routes/posts.js
    //this is just declaring a function to be sent to routes/posts.js
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message })

    }
    res.send('Post Creation');
};