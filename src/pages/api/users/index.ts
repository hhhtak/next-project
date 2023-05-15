// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const usersApi = process.env.USERS_API_PATH
  const response = usersApi && (await fetch(usersApi))
  const users = response && (await response.json())
  res.status(200).json(users)
}

export default handler
