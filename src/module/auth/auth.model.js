const UsersQuery = require("../../query/users.query");
const Exception = require("../../lib/httpException");
const AuthQuery = require("../../query/auth.query");
const JWTLib = require("../../lib/jwt");

const AuthModel = {
    register: async (body) => {
        const { user_username, user_password } = body;

        const getUser = await UsersQuery.getUserByUsername(user_username);
        if (getUser.length > 0) {
            throw new Exception.HttpException(409, 'User already exists', Exception.Errors.USER_ALREADY_EXISTS);
        }

        await AuthQuery.register({ user_username, user_password });

        return {
            status: 201,
            message: 'User registered successfully'
        }
    },
    login: async (body) => {
        const { user_username, user_password } = body;

        const getUser = await UsersQuery.getUserByUsername(user_username);
        if (getUser.length < 0) {
            throw new Exception.HttpException(409, 'User Not Found', Exception.Errors.USER_NOT_FOUND);
        }

        const checkUser = await UsersQuery.getUserByLogin(user_username, user_password);
        if (!checkUser.length) {
            throw new Exception.HttpException(409, 'Invalid Login or Password', Exception.Errors.INVALID_LOGIN_OR_PASSWORD);
        }

        const token = JWTLib.requestJwtToken(getUser.user_id);

        return {
            status: 200,
            message: 'User logged in successfully',
            token: token
        }
    }
}

module.exports = AuthModel