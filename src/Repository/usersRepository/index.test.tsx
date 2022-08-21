import nock from 'nock'
import fetch from 'node-fetch'
import { getUsers } from '@repository/usersRepository'
import { User } from '@interface/user'

describe('testing UseCase', () => {
  ;(globalThis as any).fetch = fetch

  const mockData: User[] = [
    {
      id: 1,
      name: 'Alice1',
      age: 20,
      postCode: 8701184,
      address: 'あきる野市秋川３ー２ー１',
    },
  ]

  it('calls google and returns data to me', async () => {
    process.env.API_URL = 'http://api.com'

    nock(process.env.API_URL).get('/users').reply(200, mockData)
    const response = await getUsers()

    expect(response.status).toEqual(200)
  })
})
