import db from '../db.js';
import dayjs from 'dayjs';

export async function getProducts(req, res){    

    const products = await db.collection("products").find({}).toArray()
    
    res.send(products);    

}

export async function postOrder(req, res){
  
        const session = res.locals.session
        const newOrder = req.body;
        
        const day = dayjs().locale('pt-br')
        
        try{
        const user = await db.collection("users").findOne({email : session.email})
        await db.collection('orders').insertOne(
          {
            newOrder,
            date: day.format("DD/MM"),
            email: session.email,
            address: {
              street: user.street,
              number: user.number,
              neighborhood: user.neighborhood,
              city: user.city,
              state: user.state
            }
          }
        )
        res.status(201).send("Pedido finalizado com sucesso")
        }catch (error){
          res.sendStatus(error)
        }
}

