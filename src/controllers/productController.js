import db from '../db.js';

export async function getProducts(req, res){    

    const products = await db.collection("products").find({}).toArray()
    
    res.send(products);    

}

export async function postOrder(req, res){
  
        const session = res.locals.session
        const newOrder = req.body;
        console.log(newOrder)
        const day = dayjs().locale('pt-br')
        
        try{
        
        await db.collection('orders').insertOne(
          {
            newOrder,
            date: day.format("DD/MM"),
            email: session.email
          }
        )
          res.status(201).send("Valor cadastrado com sucesso")
        }catch (error){
          res.sendStatus(error)
        }
}

