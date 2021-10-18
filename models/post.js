import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema({
    title:  String, 
    author: String,
    body:   String,
});

export const post = mongoose.model('post', postSchema);