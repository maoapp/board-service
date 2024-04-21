import express, { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { RequestCustom } from '../../types';

const prisma = new PrismaClient();

export async function getTasksByUserHandler(req: Request, res: Response) {
    try {
      const userId = req.userId;

      if (!userId) {
        return res.status(401).json({ error: 'Unauthorized' });
      }
      
      const tasks = await prisma.task.findMany({
        where: {
          userId: userId
        }
      });

      res.status(200).send(tasks)
    } catch (error) {
      console.error('Error creating task:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
}
