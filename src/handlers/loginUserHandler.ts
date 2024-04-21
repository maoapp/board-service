import { Request, Response, Router } from 'express';
import { PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/auth';


export const loginUserHandler = async (req: Request, res: Response) => {
  const prisma = new PrismaClient();
  const { email, password } = req.body;

  try {
    // Find user by email
    const user: User | null = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Generate JWT token
    const token = generateToken(user.id);

    res.status(200).json({ user, token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
