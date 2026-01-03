const jwt = require('jsonwebtoken');

const { internalErrorCatcher } = require('../shared/logger/logger.internal');

const JWTLib = {
    requestJwtToken(payload) {
        try {
            const token = jwt.sign({ id: payload }, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRATION,
            });
            return token;
        } catch (error) {
            internalErrorCatcher(error);
        }
    },
    verifyJwtToken(token) {
        try {
            const verifed = jwt.verify(token, process.env.JWT_SECRET);
            return verifed;
        } catch (error) {
            if (error.expiredAt) {
                return {
                    status: 402,
                };
            }
        }
    }
}

module.exports = JWTLib
