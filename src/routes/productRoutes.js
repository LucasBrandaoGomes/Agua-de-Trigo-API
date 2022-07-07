import { Router } from "express"
import { getProducts, postProducts, postOrder } from "../controllers/productController.js"

const router = Router()

router.get('/products', getProducts)
router.post('/products', postProducts )
router.post('/order', postOrder)

export default router