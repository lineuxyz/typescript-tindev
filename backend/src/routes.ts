import express from 'express'
import DevController from './controllers/DevController'

const routes = express.Router()

routes.post('/devs', DevController)

export default routes
