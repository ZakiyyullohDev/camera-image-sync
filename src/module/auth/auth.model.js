const UsersQuery = require("../../query/users.query");
const Exception = require("../../lib/httpException");
const AuthQuery = require("../../query/auth.query");

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
    }
}

module.exports = AuthModel