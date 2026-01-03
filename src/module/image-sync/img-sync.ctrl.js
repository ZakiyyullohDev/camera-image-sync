const ExpressFunctions = require('../../lib/express.function');
const ImgSyncModel = require('./img-sync.model');

const ImgSyncCtrl = {
    imgRecieve: async (req, res) => {
        try {
            const model = await ImgSyncModel.imgRecieve(req.files);

            return res.status(200).json(model)
        } catch (error) {
            ExpressFunctions.controllerError(res, error)
        }
    }
}

module.exports = ImgSyncCtrl;