import { Router } from "express"
import { getProducts, postOrder } from "../controllers/productController.js"
import tokenValidateMiddleware from "../middlewares/tokenValidate.js"

const router = Router()

router.get('/products', getProducts)
router.post('/orders', tokenValidateMiddleware, postOrder)

export default router;