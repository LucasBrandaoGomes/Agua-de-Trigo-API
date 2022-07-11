import db from '../db.js'

export default async function tokenValidateMiddleware(req, res, next) {
    const { authorization } = req.headers
    const token = authorization?.replace('Bearer ', '')
    const session = await db.collection('sessions').findOne({ token })

    if (!session) {
        return res.status(401).send('Unauthorized')
    }
    res.locals.session = session

    next()
}