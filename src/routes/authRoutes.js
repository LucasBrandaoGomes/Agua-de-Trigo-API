import { Router } from "express"
import { SignIn, SignUp } from "../controllers/authController.js"

const router = Router()

router.post('/sign-up', SignUp)
router.post('/sign-in', SignIn)

export default router;