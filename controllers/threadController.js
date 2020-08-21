// import express from 'express';
import Thread from '../models/Thread.js';
import Resource from '../models/Resource.js';

//type, title, link, description, 
export const postResourceSubmit = async(req, res) => {
    const {
        body: {type, title, link, description}
    } = req;
    try{
        const newResource = await Resource.create({
            type,
            title,
            link,
            description
        });
    } catch(e){
        console.log(e);
    }
}

