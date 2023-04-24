import { Router } from 'express'
import * as nadeThrowCtrl from "../controllers/nade-throw.js"
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

///GET
router.get('/',   nadeThrowCtrl.index)
router.get('/:nadeThrowId', nadeThrowCtrl.show)

///POST
router.post('/', isLoggedIn, nadeThrowCtrl.create)


export {
  router
}
