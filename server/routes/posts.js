//this will be all the handlers/controllers for are routes so we can keep logic seperate
import express from 'express';

import { getPosts, createPost } from '../controllers/posts.js'

const router = express.Router();

router.get("/", getPosts);//this is receiving from controllers/posts.js
//getPosts is the variable functions passed from controllers/posts.js

router.post("/", createPost);

export default router;