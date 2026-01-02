const uniqRow = require("../lib/pg");

const UsersQuery = {

    getUserByUsername: async (userUsername) => {
        const user = await uniqRow(`SELECT * FROM users WHERE user_username = $1`, userUsername)
        return user;
    }

};

module.exports = UsersQuery;