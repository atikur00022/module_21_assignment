import {JWT_EXPIRE_TIME, JWT_KEY} from "../config/config.js";
import jwt from "jsonwebtoken";

// Token Encoded
export const TokenEncoded = (email, userId) => {
    const key = JWT_KEY;
    const expire = { expiresIn: JWT_EXPIRE_TIME };
    const payload = { email, userId };

    return jwt.sign(payload, key, expire);
}

// Token Decoded
export const TokenDecoded = (token) => {
    try{
        return jwt.verify(token, JWT_KEY);
    }catch (e) {
        return null;
    }
}