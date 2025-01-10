import { pool } from '../connection'

type UserProps = {
    id: string
    name: string
    email: string
    password: string
}

type UserUpdateProps = {
    id: string
    name: string
    email: string
    password: string
}

export default class UserRepository {
    async findByEmail(email: string) {
        const query = 'select * from users where email = $1'
        const { rows } = await pool.query(query, [email])
        return rows[0]
    }

    async findById(id: string) {
        const query = 'select * from users where id = $1'
        const { rows } = await pool.query(query, [id])
        return rows[0]
    }

    async find() {
        const query = 'select * from users'
        const { rows } = await pool.query(query)
        return rows
    }

    async create(props: UserProps) {
        const query = 'insert into users (id, name, email, password) values ($1, $2, $3, $4)'
        await pool.query(query, [props.id, props.name, props.email, props.password])
    }

    async delete(id: string) {
        const query = 'delete from users where id = $1'
        const { rows } = await pool.query(query, [id])
        return rows[0]
    }

    async update(id: string, props: UserUpdateProps) {
        const query = 'update users set name = $1, set email = $2, set password = $3 where id = $4'
        await pool.query(query, [props.name, props.email, props.password, id])
    }
}