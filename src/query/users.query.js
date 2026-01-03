const uniqRow = require("../lib/pg");

const UsersQuery = {

    getUserByUsername: async (userUsername) => {
        const user = await uniqRow(`SELECT * FROM users WHERE user_username = $1`, userUsername)
        return user;
    },
    getUserByLogin: async (userUsername, userPassword) => {
        const user = await uniqRow(`SELECT * FROM users WHERE user_username = $1 AND user_password = $2`, userUsername, userPassword)
        return user;
    }

};

module.exports = UsersQuery;