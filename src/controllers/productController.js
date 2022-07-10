import bcrypt from 'bcrypt';
import Joi from "joi";
import db from '../db.js';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

export async function getProducts(req, res){    

    const productss = await db.collection("products").find({}).toArray()
    
    res.send(productss);    

}

export async function postOrder(req, res){

}
