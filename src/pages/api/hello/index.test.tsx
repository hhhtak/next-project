import httpMocks from 'node-mocks-http'
import handler from '@api/hello'

describe('/api/hello', () => {
  test('200', async () => {
    const mockReq: any = httpMocks.createRequest()
    const mockRes: any = httpMocks.createResponse()

    await handler(mockReq, mockRes)
    expect(mockRes.statusCode).toEqual(200)
  })
})
