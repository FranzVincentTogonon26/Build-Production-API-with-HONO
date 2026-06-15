import { serve } from '@hono/node-server'
import { Hono } from 'hono'

import authorRoutes from './routes/authorRoutes.ts'

const app = new Hono()

app.route('/auhtors', authorRoutes )

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
