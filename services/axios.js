import axios from '@nuxtjs/axios'

export function getMessage () {
  return axios.get('http://localhost:3004/message').then((response) => {
    return response.data
  })
}
