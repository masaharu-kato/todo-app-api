import { Request, Response } from 'express'
import { TaskModel } from '../models/task'

async function _get_task(id: any) {
    const task = await TaskModel.findById(String(id))
    if(!task) throw new Error('Object not found on the DB.')
    return task
}

export async function get_tasks(_req: Request, res: Response) {
    return res.json(await TaskModel.find())
}

export async function get_task(req: Request, res: Response) {
    return res.json(await _get_task(req.params.id))
}

export async function add_task(req: Request, res: Response) {
    const task = new TaskModel()
    task.text = String(req.body.text)
    task.done = false
    await task.save()
    return res.json({status: 'success'})
}

export async function edit_task(req: Request, res: Response) {
    const task = await _get_task(req.body.id)
    task.text = String(req.body.text)
    await task.save()
    return res.json({status: 'success'})
}

export async function delete_task(req: Request, res: Response) {
    const task = await _get_task(req.body.id)
    await task.delete()
    return res.json({status: 'success'})
}

export async function set_task_done(req: Request, res: Response) {
    const task = await _get_task(req.body.id)
    task.done = true
    await task.save()
    return res.json({status: 'success'})
}

export async function set_task_undone(req: Request, res: Response) {
    const task = await _get_task(req.body.id)
    task.done = false
    await task.save()
    return res.json({status: 'success'})
}
