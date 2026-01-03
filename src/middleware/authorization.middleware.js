const Exception = require("../lib/httpException");
const uniqRow = require("../lib/pg");
const JWTLib = require("../lib/jwt");

async function authorizationMiddleware(req, res, next) {
    try {
        const authorization = req.headers.authorization;
        
        if (!req.headers || !authorization) {
            return res.status(401).json({
                status: 401,
                error: Exception.Errors.AUTHORIZATION_ERROR,
                message: 'header da authorization majburiy',
            });
        }
        
        const token = await JWTLib.verifyJwtToken(authorization);
        
        if (!token || (token.status && token.status == 402)) {
            return res.status(401).json({
                status: 401,
                error: Exception.Errors.AUTHORIZATION_ERROR,
                message: `Authorization da hatolik`,
            });
        }
        
        const getUserByIdQuery = `
            select
                user_id
            from users
            where user_id = $1
        `;

        const user = await uniqRow(getUserByIdQuery, token.id);
        if (!user) {
            
            return res.status(401).json({
                status: 401,
                error: Exception.Errors.AUTHORIZATION_ERROR,
                message: `Authorization da hatolik`,
            });
        }
        
        next();
    } catch (error) {}
}

module.exports = authorizationMiddleware