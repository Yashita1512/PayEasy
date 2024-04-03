import JWT_SECRET from "./config.js"

export function authMiddleware(req, res, next){
//Checks the headers for an Authorization header (Bearer <token>)

    function base64urlEncode(str) {
        return Buffer.from(str)
        .toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
    }

    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        // If not, return a 403 status back to the user
        return res.status(400).json({})
    }

// Verifies that the token is valid
    const token = authHeader.split(' ')[1]

    function base64urlDecode(str) {
        const paddedStr = (str + '==='.slice((str.length + 3) % 4))
                          .replace(/-/g, '+')
                          .replace(/_/g, '/');
        return Buffer.from(paddedStr, 'base64').toString('utf-8');
    }

    function decode(token) {
        const parts = token.split('.');
        const payload = JSON.parse(base64urlDecode(parts[1]));
        return payload;
      }

    try{
        const jwtToVerify = decode(token)

        // Puts the userId in the request object if the token checks out.
        req.userId = jwtToVerify.userId;
        next();

    } catch (err){
        // If not, return a 403 status back to the user
        console.error("Error verifying JWT:", err);
        return res.status(403).json({msg: "Error authenticating"})
    }

}