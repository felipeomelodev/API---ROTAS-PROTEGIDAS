import User from './user'

describe('User model', () => {
    test('deve criar um novo usuário', () => {
        const props = {
            name: 'Carlos Alcaraz',
            email: 'carlitos_alcaraz@gmail.com',
            password: '123456ATP.'
        }

        const user = new User(props)

        expect(user.id).toBeDefined()
        expect(user.name).toBe(props.name)
        expect(user.email).toBe(props.email)
        expect(user.password).toBe(props.password)
    })

    test('não deve criar um usuário com email inválido', () => {
        const props = {
            name: 'Carlos Alcaraz',
            email: 'carlitos_alcaraz@',
            password: '123456ATP.'
        }

        expect(() => {
            new User(props)
        }).toThrow(new Error('Email inválido.'))
        
    })

    test('não deve criar um usuário com senha inválida', () => {
        const props = {
            name: 'Carlos Alcaraz',
            email: 'carlitos_alcaraz@gmail.com',
            password: '1234'
        }

        expect(() => {
            new User(props)
        }).toThrow(new Error('A senha precisa ter no mínimo 5 dígitos.'))
        
    })
})