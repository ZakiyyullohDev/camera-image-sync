const uniqRow = require('../lib/pg');

const AuthQuery = {

    register: async (payloads) => {
        const { user_username, user_password } = payloads;

        return await uniqRow(
            `INSERT INTO users (user_username, user_password) VALUES ($1, $2) RETURNING *`,
            user_username,
            user_password
        );
    }

};

module.exports = AuthQuery;