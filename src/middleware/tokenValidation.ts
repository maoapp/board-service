import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
  userId: number;
}

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // TODO: Check the right way to handle the types
    const decodedToken = jwt.verify(token, "WbmvAhfzzCkTtUaYGpcHTQC3vVSndcfGkV8_CQZctNCGIX8hEYn75izdvr54fWiL") as UserPayload;

    (req as any).userId = decodedToken.userId;

    next();
  } catch (error) {
    console.error('Error validating token:', error);
    return res.status(401).json({ error: 'Unauthorized' });
  }
};
