import nock from 'nock'
import fetch from 'node-fetch'
import httpMocks from 'node-mocks-http'
import handler from '@api/users'

describe('/api/users', () => {
  test('200', async () => {
    ;(globalThis as any).fetch = fetch

    process.env.USERS_API_PATH = 'http://api.com/users'
    const mockData = { name: 'aaaaaaaa' }
    nock('http://api.com').get('/users').reply(200, mockData)

    const mockReq: any = httpMocks.createRequest()
    const mockRes: any = httpMocks.createResponse()
    await handler(mockReq, mockRes)

    expect(mockRes.statusCode).toEqual(200)
    expect(mockRes._getJSONData()).toEqual(mockData)
  })
})
