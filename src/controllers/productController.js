import db from '../db.js';

export async function getProducts(req, res){    

    const productss = await db.collection("products").find({}).toArray()
    
    res.send(productss);    

}

export async function postOrder(req, res){

}
