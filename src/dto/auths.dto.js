const AuthDto = {
    authRegisterDto: {
        user_username: {
            required: true,
            type: 'string',
            minLength: 3,
            maxLength: 32,
        },
        user_password: {
            required: true,
            type: 'string',
            minLength: 8,
            maxLength: 32,
        }
    }
}

module.exports = AuthDto