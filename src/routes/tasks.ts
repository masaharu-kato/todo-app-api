import express from 'express'
import * as tasks_ctrl from '../controllers/tasks'

export const router = express.Router()

router.get('/tasks', async(req, res) => { return await tasks_ctrl.get_tasks(req, res) })
router.get('/task/:id', async(req, res) => { return await tasks_ctrl.get_task(req, res) })

router.post('/add-task'   , async(req, res) => { return await tasks_ctrl.add_task(req, res) })
router.post('/edit-task'  , async(req, res) => { return await tasks_ctrl.edit_task(req, res) })
router.post('/delete-task', async(req, res) => { return await tasks_ctrl.delete_task(req, res) })

router.post('/set-task-done'  , async(req, res) => { return await tasks_ctrl.set_task_done  (req, res) })
router.post('/set-task-undone', async(req, res) => { return await tasks_ctrl.set_task_undone(req, res) })

router.post('/delete-done-tasks', async(req, res) => { return await tasks_ctrl.delete_done_tasks(req, res) })
