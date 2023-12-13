import jwt from 'jsonwebtoken';
import generateTokens from '../utils/generateTokens';
import 'dotenv/config';

export function verifyRefreshToken(req, res, next) {
    try {
        const currentRefreshToken = req.cookies.refreshToken;
        const { user } = jwt.verify(currentRefreshToken, process.env.REFRESH_TOKEN_SECRET);
        
        const { accessToken, refreshToken } = generateTokens({ user });
        res.locals.user = user;
        res
            .cookie('accessToken', accessToken, {httpOnly: true, maxAge: `${15 * 60 * 1000}`})
            .cookie('refreshToken', refreshToken, {httpOnly: true, maxAge: `${30 * 24* 60 * 60 * 1000}`});
        
        next();
    } catch (error) {
        console.log('Failed refresh token validation', error.message);
        res.clearCookie('refreshToken').sendStatus(403);
    }
}

export function verifyAccessToken(req, res, next) {
    try {
        const { accessToken } = req.cookies;
        jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
        next();
    } catch (error) {
        console.log('Failed access token validation', error.message);
        verifyRefreshToken(req, res, next);
    }
}
