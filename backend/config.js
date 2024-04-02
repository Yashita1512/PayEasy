import secureRandomString from 'secure-random-string';

// Generate a secure random JWT secret
const generateJWTSecret = () => {
    return secureRandomString({ length: 32, symbols: true });
};

// Usage example
const JWT_SECRET = generateJWTSecret();

export default JWT_SECRET;