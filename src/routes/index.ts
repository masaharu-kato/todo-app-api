import express from 'express'
import * as tasks from './tasks'

export const router = express.Router()
router.use('/', tasks.router)
