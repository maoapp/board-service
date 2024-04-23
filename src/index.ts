import express, { Request } from 'express'
import morgan from 'morgan'
import { getSwaggerOptions, initializeSwagger } from './swagger'

import { boardsController } from './routes/boardsControllers'
import { authController } from './routes/authControllers'
const cors = require('cors'); 

const app = express()
const port = process.env.PORT || 8000

// Middlewares
app.use(express.json())
app.use(cors())


// Define custom format for logging
morgan.token('custom', (req: Request) => {
  return JSON.stringify({
    method: req.method,
    url: req.originalUrl,
    timestamp: new Date().toISOString(),
  })
})

// Use morgan middleware with the custom format
app.use(morgan(':custom'))

// Enable CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
if (req.method == "OPTIONS") {
  res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
  return res.status(200).json({});
}

next();
});

// health endpoint
app.get('/health', (_req, res) => {
  res.status(200).send('Ok')
})

// Controllers
app.use('/board', boardsController);
app.use('/auth', authController);


// Configure Swagger with the provided options
initializeSwagger(getSwaggerOptions(), app)

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`)
})

