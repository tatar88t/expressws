import express from 'express';
import mongoose from 'mongoose';
import axios from 'axios'

export const getChuckInfo = async (req, res) => {

    const options = {
    method: 'GET',
    url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
    headers: {
        accept: 'application/json',
        'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
        'x-rapidapi-key': '8905bf3ae5msh94cb28d8932a43bp14c50djsndcbe754c3507'
    }
    };

    axios.request(options).then(function (response) {
        console.log(response.data, '(response.data)');
        res.status(200).json(response.data)
    }).catch(function (error) {
        console.error(error);
    });
}