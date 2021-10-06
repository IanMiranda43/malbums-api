import jwt, { JwtPayload } from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET as string;

function generateJwt(data: string, exp: string): string {
  return jwt.sign({ data }, secretKey, { expiresIn: exp });
}

function verifyJwt(token: string): JwtPayload | string {
  return jwt.verify(token, secretKey);
}

function generateUserJwt(email: string): string {
  return generateJwt(email, '10min');
}

export { generateJwt, verifyJwt, generateUserJwt };
