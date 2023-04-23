import { Router } from 'express'
import * as grenadesCtrl from "../controllers/grenades.js"
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

router.get('/', grenadesCtrl.index)
router.post('/', isLoggedIn, grenadesCtrl.create)


export {
  router
}
