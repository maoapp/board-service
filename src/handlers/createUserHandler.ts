import { Request, Response, Router } from 'express';
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt';
import { generateToken } from '../utils/auth';


export const createUserHandler = async (req: Request, res: Response) => {
  const prisma = new PrismaClient();

  const { email, password } = req.body;

  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword
      }
    });

    // Generate JWT token
    const token = generateToken(newUser.id);

    res.status(201).json({ user: newUser, token });
  } catch (error) {
    console.error('Error signing up:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
