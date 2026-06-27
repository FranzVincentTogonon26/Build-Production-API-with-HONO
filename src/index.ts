import { serve } from '@hono/node-server'
import { Hono } from 'hono'

import authorRoutes from './routes/authorRoutes.ts'
import authRoutes from './routes/authRoutes.ts'
import apiKeyRoutes from './routes/apiKeyRoutes.ts'
import bookRoutes from './routes/bookRoutes.ts'

const app = new Hono()

app.route('/authors', authorRoutes )
app.route('/books', bookRoutes )
app.route('/auth', authRoutes )
app.route('/api-keys', apiKeyRoutes )

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
