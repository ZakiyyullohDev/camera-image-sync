const express = require('express').Router();

const validationMiddleware = require('../../middleware/validation.middleware');
const AuthDto = require('../../dto/auths.dto');
const AuthCtrl = require('./auth.ctrl');

express.post(
    '/api/auth/register',
    validationMiddleware(AuthDto.authRegisterDto, 'body'),
    AuthCtrl.register
);

module.exports = express;