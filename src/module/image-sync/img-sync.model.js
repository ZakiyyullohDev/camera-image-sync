const path = require('path');

const Exception = require("../../lib/httpException");

const ImgSyncModel = {
    imgRecieve: async (files) => {
        if (!files || !files.image) {
            throw new Exception.HttpException(400, 'Image required', Exception.Errors.NOT_FOUND);
        }

        const file = files.image;

        if (!file.mimetype.startsWith('image/')) {
            throw new Exception.HttpException(400, 'Only Image allowed', Exception.Errors.BAD_REQUEST);
        }
        
        const uploadDir = path.join(process.cwd(), 'upload');
        const fileName = `${file.name}`;
        const savePath = path.join(uploadDir, fileName);
        
        await file.mv(savePath);
        
        return {
            status: 200,
            message: 'Image received successfully'
        };
    }
}

module.exports = ImgSyncModel