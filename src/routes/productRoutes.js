import { Router } from "express"
import { getProducts, postOrder } from "../controllers/productController.js"

const router = Router()

router.get('/products', getProducts)
router.post('/order', postOrder)

export default router;