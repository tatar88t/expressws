import express from 'express';
import mongoose from 'mongoose';
import { post } from '../models/post.js';

export const getPosts = async (req, res) => {
    // res.send('INDEX/POSTS');
    try {
        const posts = await post.find();
        res.status(200).json(posts)
    } catch (error) {
        res.status(404).json({ message: error.message });
    }  
}

export const createPost = async(req, res) => {
        console.log(req, 'REQ BODY');
        const { title, author, body } = req.body;
        const newPost = new post({title, author, body})
    try {
        await newPost.save();
        console.log(newPost, 'NEW_POST');
        res.status(201).json(newPost);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}