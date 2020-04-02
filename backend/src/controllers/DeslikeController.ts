import { Request, Response } from 'express'
import Dev from '../models/Dev'

class DeslikeController {
  public async store (req: Request, res: Response): Promise<Response> {
    const { devId } = req.params
    const { user } = req.headers

    const targetDev = await Dev.findById(devId)
    const loggedDev = await Dev.findById(user)

    if (!targetDev) {
      return res.status(400).json({ error: 'Dev not exists' })
    }

    loggedDev.deslikes.push(targetDev._id)

    await loggedDev.save()

    return res.json(loggedDev)
  }
}

export default new DeslikeController()
