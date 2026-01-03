const errors = {
    INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
    AUTHORIZATION_ERROR: 'AUTHORIZATION_ERROR',
    VALIDATION_ERROR: 'VALIDATION_ERROR',
    FORBIDDEN_ERROR: 'FORBIDDEN_ERROR',
    INVALID_TOKEN: 'INVALID_TOKEN',
    TOKEN_EXPIRED: 'TOKEN_EXPIRED',
    TOKEN_REVOKED: 'TOKEN_REVOKED',
    UNAUTHORIZED: 'UNAUTHORIZED',
    UPLOAD_ERROR: 'UPLOAD_ERROR',
    BAD_REQUEST: 'BAD_REQUEST',
    NOT_FOUND: 'NOT_FOUND',

    //! USER_ERRORS_START

    INVALID_LOGIN_OR_PASSWORD: 'INVALID_LOGIN_OR_PASSWORD',
    USER_ALREADY_EXISTS: 'USER_ALREADY_EXISTS',
    USER_NOT_FOUND: 'USER_NOT_FOUND',
    
    //! USER_ERRORS_START
    
};

class HttpException {
    constructor(status, message, error) {
        this.status = status;
        this.message = message || '';
        this.error = error;
    }
}

const Exception = {
    Errors: errors,
    HttpException: HttpException,
};

module.exports = Exception;