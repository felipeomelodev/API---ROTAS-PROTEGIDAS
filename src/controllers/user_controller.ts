import { Request, Response } from 'express'
import UserRepository from '../repositories/user_repository'
import User from '../models/user'
import bcypt from 'bcrypt'

export default class UserController {
    async create(req: Request, res: Response) {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(400).json({
                message: 'Os campos name, email e password são obrigatórios.'
            })
        }

        try {
            const userRepository = new UserRepository()

            const emailExists = await userRepository.findByEmail(email)

            if (emailExists) {
                return res.status(400).json({
                    message: 'Email informado já existe.'
                })
            }

            const user = new User({
                name,
                email,
                password
            })

            const hashPassword = await bcypt.hash(password, 10)
            user.password = hashPassword

            await userRepository.create(user)

            return res.status(201).json(user)

        } catch (error) {
            const erro = error as Error
            return res.status(400).json({
                message: erro.message
            })
        }
    }

    async get(req: Request, res: Response) {
        try {
            const userRepository = new UserRepository()

            const users = await userRepository.find()

            return res.json(users)

        } catch (error) {
            const erro = error as Error
            return res.status(400).json({
                message: erro.message
            })
        }
    }

    async detail(req: Request, res: Response) {
        const { id } = req.params

        try {
            const userRepository = new UserRepository()

            const user = await userRepository.findById(id)

            if (!user) {
                return res.status(404).json({
                    message: 'Usuário não encontrado.'
                })
            }

            return res.json(user)

        } catch (error) {
            const erro = error as Error
            return res.status(400).json({
                message: erro.message
            })
        }
    }
}

 