export const getUsers = async () => {
  return await fetch(process.env.API_URL + '/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
