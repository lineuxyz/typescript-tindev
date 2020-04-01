import { Request, Response } from 'axios'
import Dev from '../models/Dev'

class LikeController {
  public async store (req: Request, res: Response): Promise<Response> {
    const { devId } = req.params
    const { user } = req.headers

    const targetDev = await Dev.findById(devId)
    const loggedDev = await Dev.findById(user)

    if (!targetDev) {
      return res.status(400).json({ error: 'Dev not exists' })
    }

    if (targetDev.likes.includes(loggedDev._id)) {
      console.log('Deu match')
    }

    loggedDev.likes.push(targetDev._id)

    await loggedDev.save()

    return res.json(loggedDev)
  }
}

export default new LikeController()
