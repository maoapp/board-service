// seed.js

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  // Create users
  const user = await prisma.user.create({
    data: {
      email: 'user1@example.com',
      password: 'test',
      tasks: {
        create: [
          {
            title: 'Task 1 for User 1',
            content: 'This is task 1 for user 1.'
          },
          {
            title: 'Task 2 for User 1',
            content: 'This is task 2 for user 1.'
          }
        ]
      }
    },
    include: {
      tasks: true // Include tasks in the created user object
    }
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
