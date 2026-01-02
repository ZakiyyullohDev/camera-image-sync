const app = require('./app');

const users = require('./module/users/users.index');
const auth = require('./module/auth/auth.index');

app([users, auth]);