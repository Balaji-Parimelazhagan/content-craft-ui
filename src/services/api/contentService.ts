import axios from 'axios'
import { IS_MOCK } from '../../constants/appConstants'
import textContents from '../../mocks/textContents'

const api = axios.create({
  baseURL: 'https://96ca-2406-7400-ca-e0a0-d50c-c78f-8b5f-a2d5.ngrok-free.app/api/',
  headers: {
    'Content-Type': 'application/json',
  },
})

export const getAllTextContents = async () => {
  if (IS_MOCK) {
    return textContents
  }
  const response = await api.get('text-wikis')
  return response.data
}
