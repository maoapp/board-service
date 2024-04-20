import express, { Request } from 'express'
import morgan from 'morgan'

const app = express()
const port = process.env.PORT || 8000

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

// Kube health endpoint
app.get('/health', (_req, res) => {
  res.status(200).send('Ok')
})

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`)
})
