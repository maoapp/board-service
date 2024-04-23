### Board Service

### Methodology

To approach the exercise effectively, I adopted a structured methodology aimed at configuring the foundational elements of the project. This involved defining the main structure, designing the architecture, and integrating the necessary tools for the service. This initial phase laid the groundwork for subsequent tasks, such as modeling the database and implementing API services.

In terms of data management, I opted to leverage Prisma, a robust ORM solution. This decision was influenced by the requirement for its usage in the position and its reputation for facilitating flexible and rapid development. Additionally, I selected Express.js for building the server due to its extensive ecosystem and straightforward routing capabilities. Furthermore, I employed Express Validator to streamline service validation processes and utilized JWT (JSON Web Tokens) for authentication based on token authorization, ensuring robust security measures.

### Development Tasks Completed

The following tasks were completed in sequential order:

Project Setup: Establish project structure, config, dependencies. (initial commit)
  
[- Database Model: Define data structure.](https://github.com/maoapp/board-service/pull/1 "- Database Model: Define data structure.")

[- Board Service: Create GET, POST, PATCH functionalities.](https://github.com/maoapp/board-service/pull/2 "- Board Service: Create GET, POST, PATCH functionalities.")

[- Auth Service Integration: Validate tokens for board service.](https://github.com/maoapp/board-service/pull/4 "- Auth Service Integration: Validate tokens for board service.")

[- Config to deploy](https://github.com/maoapp/board-service/pull/6 "- Config to deploy")

[- Plus: Add docs](https://github.com/maoapp/board-service/pull/10 "- Plus: Add docs")

### Development Tasks Pending

All pending tasks are highlighted with a TODO comment.

- Improve auth security
- Replacing put for a patch to improve the resources update
- Adding validation in board posting to just allow status included in the enum
- Adding env files and deploys to different environments
- Adding a docker file

### Branching Strategy

For task management and code organization, the following branching strategy was employed:

Feature Branching: All main tasks were managed using feature branches. Each feature branch focused on implementing a specific functionality or feature.
Fix Branching: Bugs and refactoring tasks were handled using fix branches. These branches were dedicated to resolving issues and improving existing code without introducing new features.
This approach ensured a structured and organized development process, allowing for efficient collaboration and tracking of changes.

### Instructions to running locally

- Install Dependencies with npm i
- run the project with npm run dev

### Production url

https://board-service.onrender.com
