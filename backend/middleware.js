import JWT_SECRET from "./config.js"
import jwt from "jsonwebtoken"

export function authMiddleware(req, res, next){
//Checks the headers for an Authorization header (Bearer <token>)
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        // If not, return a 403 status back to the user
        return res.status(400).json({})
    }

// Verifies that the token is valid
    const token = authHeader.split(' ')[1]

    try{
        const jwtToVerify = jwt.verify(token, JWT_SECRET);

        // Puts the userId in the request object if the token checks out.
        req.userId = jwtToVerify.userId;
        next();

    } catch (err){
        // If not, return a 403 status back to the user
        console.error("Error verifying JWT:", err);
        return res.status(403).json({msg: "Error authenticating"})
    }

}