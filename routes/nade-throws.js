import { Router } from 'express'
import * as nadeThrowsCtrl from "../controllers/nade-throws.js"
import { isLoggedIn } from "../middleware/middleware.js"

const router = Router()

///GET
router.get('/',   nadeThrowsCtrl.index)
router.get('/:nadeThrowId', nadeThrowsCtrl.show)
router.get('/:nadeThrowId/edit', isLoggedIn, nadeThrowsCtrl.edit)
router.get('/:nadeThrowId', nadeThrowsCtrl.show)
router.get('/:nadeThrowId/comments/:commentId/edit', isLoggedIn, nadeThrowsCtrl.editComment)
///POST
router.post('/', isLoggedIn, nadeThrowsCtrl.create)
router.post('/:nadeThrowId/comments', isLoggedIn, nadeThrowsCtrl.addComment)

///PUT
router.put('/:nadeThrowId', isLoggedIn, nadeThrowsCtrl.update)
router.put('/:nadeThrowId/comments/:commentId', isLoggedIn, nadeThrowsCtrl.updateComment)
///DELETE
router.delete('/:nadeThrowId', isLoggedIn, nadeThrowsCtrl.delete)
router.delete('/:nadeThrowId/comments/:commentId', isLoggedIn, nadeThrowsCtrl.deleteComment)

export {
  router
}
