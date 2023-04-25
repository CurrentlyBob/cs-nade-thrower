import { Router } from 'express'
import * as nadeThrowCtrl from "../controllers/nade-throw.js"
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

///GET
router.get('/',   nadeThrowCtrl.index)
router.get('/:nadeThrowId', nadeThrowCtrl.show)
router.get('/:nadeThrowId/edit', isLoggedIn, nadeThrowCtrl.edit)
router.get('/:nadeThrowId', nadeThrowCtrl.show)
router.get('/:nadeThrowId/comments/:commentId/edit', isLoggedIn, nadeThrowCtrl.editComment)
///POST
router.post('/', isLoggedIn, nadeThrowCtrl.create)
router.post('/:nadeThrowId/comments', isLoggedIn, nadeThrowCtrl.addComment)

///PATCH
router.patch('/:nadeThrowId/flip-jump-throw', isLoggedIn, nadeThrowCtrl.flipJumpThrow)

///PUT
router.put('/:nadeThrowId', isLoggedIn, nadeThrowCtrl.update)
router.put('/:nadeThrowId/comments/:commentId', isLoggedIn, nadeThrowCtrl.updateComment)
///DELETE
router.delete('/:nadeThrowId', isLoggedIn, nadeThrowCtrl.delete)
router.delete('/:nadeThrowId/comments/:commentId', isLoggedIn, nadeThrowCtrl.deleteComment)

export {
  router
}
