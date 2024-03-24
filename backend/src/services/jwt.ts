import jwt from 'jsonwebtoken'
const { JWT_KEY } = process.env;

const generateToken = (id: any) => {
    return jwt.sign({ id }, JWT_KEY, {
        expiresIn: '30d'
    })
}

export default generateToken