import request from 'superagent'
import { getEncodedToken } from 'authenticare/client'

const baseUrl = '/api/v1'

export default function consume (endpoint, method = 'get', data = {}) {
  const payloadMethod = method.toLowerCase() === 'get' ? 'query' : 'send'
  const headers = {
    Accept: 'application/json'
  }

  return request[method](baseUrl + endpoint)
    .set(headers)[payloadMethod](data)
    .set({ 'Authorization': `Bearer ${getEncodedToken()}` })
    .then(res => res)
    .catch(err => {
      throw err
    })
}
