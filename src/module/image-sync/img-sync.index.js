const express = require('express').Router();

const authorizationMiddleware = require('../../middleware/authorization.middleware');
const fileuploadMiddleware = require('../../middleware/fileupload.middleware');
const ImgSyncCtrl = require('./img-sync.ctrl');

express.post(
    '/api/image/receive',
    authorizationMiddleware,
    fileuploadMiddleware(
        'image', 
        [ 
            'image/jpeg', 
            'image/png', 
            'image/webp', 
            'image/gif', 
            'image/heic', 
            'image/heif'
        ], 20
    ),
    ImgSyncCtrl.imgRecieve
);

module.exports = express;