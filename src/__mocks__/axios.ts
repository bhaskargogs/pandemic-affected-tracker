import { districts } from '../components/SelectDistrict/SelectDistrict.test'

export default {
  get: jest.fn().mockImplementation(() => Promise.resolve({ data: { data: districts } })),
}
