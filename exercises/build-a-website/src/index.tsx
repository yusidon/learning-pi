import { Hono } from 'hono'
import { AboutPage, HomePage, NotFoundPage, SourcePage, sourceFromParam } from './pages'

const app = new Hono()

app.get('/', (c) => c.html(<HomePage />))

app.get('/about', (c) => c.html(<AboutPage />))

app.get('/sources/:slug', (c) => {
  const source = sourceFromParam(c.req.param('slug'))
  if (!source) return c.html(<NotFoundPage />, 404)
  return c.html(<SourcePage source={source} />)
})

app.notFound((c) => c.html(<NotFoundPage />, 404))

export default app
