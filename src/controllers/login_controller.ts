import { Request, Response } from 'express'
import UserRepository from '../repositories/user_repository'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export default class LoginControlller {
    async login(req: Request, res: Response) {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({
                message: 'Os campos name, email e password são obrigatórios.'
            })
        }

        try {
            const userRepository = new UserRepository()

            const user = await userRepository.findByEmail(email)

            if (!user) {
                return res.status(401).json({
                    message: 'Credenciais incorretas.'
                })
            }

            const validPassword = await bcrypt.compare(password, user.password)

            if (!validPassword) {
                return res.status(401).json({
                    message: 'Credenciais incorretas.'
                })
            }

            const token = jwt.sign({ id: user.id }, process.env.SECRET_JWT || '', {
                expiresIn: '2d'
            })

            return res.json({
                user,
                token
            })

        } catch (error) {
            const erro = error as Error
            return res.status(400).json({
                message: erro.message
            })
        }
    }
}