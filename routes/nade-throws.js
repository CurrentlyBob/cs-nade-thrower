import { Router } from 'express'
import * as nadeThrowCtrl from "../controllers/nade-throw.js"
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

///GET
router.get('/',   nadeThrowCtrl.index)
router.get('/:nadeThrowId', nadeThrowCtrl.show)
router.get('/:nadeThrowId/edit', isLoggedIn, nadeThrowCtrl.edit)
///POST
router.post('/', isLoggedIn, nadeThrowCtrl.create)

///PATCH
router.patch('/:nadeThrowId/flip-jump-throw', isLoggedIn, nadeThrowCtrl.flipJumpThrow)


export {
  router
}
