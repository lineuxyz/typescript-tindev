import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import routes from './routes'

const server = express()

mongoose.connect('mongodb+srv://lineuxyz:lineu123@cluster0-jxtvs.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(3333)
