const Exception = require('./httpException');

const MODE = process.env.MODE

function returnResponse(res, status = 500, message = 'Internal Server Error', error = Exception.Errors.INTERNAL_SERVER_ERROR) {
    return res.status(status).json({
        status,
        message,
        error,
    });
}

function controllerError(res, error) {
    if (MODE == 'DEV' && !error.status) {
        console.log(error)
        return returnResponse(res, 500, `INTERNAL ERROR: ${error}`, Exception.Errors.INTERNAL_SERVER_ERROR)
    } else {
        return returnResponse(res, error.status, error.message, error.error)
    }
}

const ExpressFunctions = {
    returnResponse,
    controllerError,
};

module.exports = ExpressFunctions;
