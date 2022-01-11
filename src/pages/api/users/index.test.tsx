import httpMocks from 'node-mocks-http'
import handler from '@api/users'

describe('/api/users', () => {
  const OLD_ENV = process.env

  beforeEach(() => {
    jest.resetModules() // Most important - it clears the cache
    process.env = { ...OLD_ENV } // Make a copy
  })

  afterAll(() => {
    process.env = OLD_ENV // Restore old environment
  })

  test('200', async () => {
    const mockReq: any = httpMocks.createRequest()
    const mockRes: any = httpMocks.createResponse()
    await handler(mockReq, mockRes)
    expect(mockRes.statusCode).toEqual(200)
  })
})
