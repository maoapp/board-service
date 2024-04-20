import express, { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export async function getTasksByUserHandler(req: Request, res: Response) {
    try {
      const userId = parseInt(req.params.userId);

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
