import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
const app = express();

app.use('/posts', postRoutes);//the /posts is a prefix for localhost:5000 making it
//to where you need to use posts or whatever you choose at the end EXAMPLE: localhost:5000/posts
app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://schoolMERN:@cluster0.iuhtn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error)  => console.log(error.message));

mongoose.set('useFindAndModify', false);