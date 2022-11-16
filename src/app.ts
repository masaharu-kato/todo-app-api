import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { router } from './routes'

const app = express()

const port = process.env.PORT || 8080

mongoose.connect('mongodb://localhost:27017/data')

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/api', router)

app.listen(port)

console.info('listen on port: ' + port)
