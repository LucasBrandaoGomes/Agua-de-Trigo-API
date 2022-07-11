import db from '../db.js'
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongodb';

dotenv.config();

export default async function tokenValidateMiddleware(req, res, next) {
    const { authorization } = req.headers
    const token = authorization?.replace('Bearer ', '')
    const _id = jwt.verify(token, process.env.JWT_SECRET);
    const session = await db.collection('sessions').findOne({ _id: new ObjectId(_id.userId) })
    if (!session) {
        return res.status(401).send('Unauthorized');
    }
    
    res.locals.session = session

    next()
}