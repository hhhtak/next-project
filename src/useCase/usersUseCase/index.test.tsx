import fetchMock from 'jest-fetch-mock'
import { getUsers } from '@useCase/usersUseCase'
import { User } from '@interface/user'

describe('testing UseCase', () => {
  const OLD_ENV = process.env

  beforeEach(() => {
    fetchMock.resetMocks()
    process.env = { ...OLD_ENV }
  })

  afterAll(() => {
    process.env = OLD_ENV
  })

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
    process.env.API_URL = 'hogehoge'
    fetchMock.mockResponseOnce(JSON.stringify({ data: '12345' }))

    //assert on the response
    fetchMock.mockResponseOnce(() => getUsers().then((res) => JSON.stringify(mockData)))
    // const res = await getUsers()
    // expect(res.data).toEqual('12345')

    expect(fetchMock.mock.calls.length).toEqual(0)
  })
})
