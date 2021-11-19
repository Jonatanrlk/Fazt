import express from 'express'
import indexRoutes from './Routes/index.rautes'

const app = express()

app.listen(3000)
console.log("server on port",3000)

app.use(indexRoutes)