import { Router } from 'express'
import UserController from './controllers/user_controller'
import LoginControlller from './controllers/login_controller'
import authMiddleware from './middlewares/auth_middlewares'

const routes = Router()

routes.post('/users', new UserController().create)
routes.post('/login', new LoginControlller().login)

routes.get('/users', authMiddleware, new UserController().get)
routes.get('/users/:id', authMiddleware, new UserController().detail)

export default routes