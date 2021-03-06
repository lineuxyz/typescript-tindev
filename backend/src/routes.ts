import { Router } from 'express'
import DevController from './controllers/DevController'
import LikeController from './controllers/LikeController'
import DeslikeController from './controllers/DeslikeController'

const routes = Router()

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.post('/devs/:devId/likes', LikeController.store)
routes.post('/devs/:devId/deslike', DeslikeController.store)

export default routes
