const app = require('./app');

const users = require('./module/users/users.index');
const auth = require('./module/auth/auth.index');
const imgSync = require('./module/image-sync/img-sync.index');

app([users, auth, imgSync]);