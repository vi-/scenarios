import { apiData } from '../types/types'

const dummyApiData: Array<apiData> = [
  {
    name: 'Scenario',
    id: 1,
    created: '2022-01-01T11:00:00',
    status: 'failed'
  },
  {
    name: 'Scenario 1',
    id: 2,
    created: '2022-04-10T11:00:00',
    status: 'results optimised'
  },
  {
    name: 'Scenario 2',
    id: 4,
    created: '2022-05-15T11:32:00',
    status: 'failed'
  },
  {
    name: 'Scenario Name',
    id: 5,
    created: '2022-05-03T21:11:00',
    status: 'results optimised'
  },
  {
    name: 'Scenario New',
    id: 6,
    created: '2022-10-08T21:11:00',
    status: 'unoptimised'
  }
]

export { dummyApiData }