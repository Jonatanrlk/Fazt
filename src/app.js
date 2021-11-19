import express from 'express'
import indexRoutes from './Routes/index.rautes'

const app = express()

app.use(indexRoutes)

export default app;