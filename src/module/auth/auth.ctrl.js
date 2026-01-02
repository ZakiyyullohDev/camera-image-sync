const ExpressFunctions = require('../../lib/express.function');
const AuthModel = require('./auth.model');

const AuthCtrl = {
    register: async (req, res) => {
        try {
            const model = await AuthModel.register(req.body);

            return res.status(201).json(model)
        } catch (error) {
            ExpressFunctions.controllerError(res, error)
        }
    },
}

module.exports = AuthCtrl;