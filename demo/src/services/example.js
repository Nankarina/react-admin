import request from '../utils/request';
import { ORG_LIST, DATA_LIST } from '../utils/api'
export function query() {
  return request('/api/users');
}
export function getCompanyList() {
  return request(ORG_LIST,{
    methods: 'POST'
  }
  )
}

export function getDataList() {
  return request(DATA_LIST,{
    methods: 'GET'
  }
  )
}

