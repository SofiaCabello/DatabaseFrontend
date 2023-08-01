import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/drug/getDrug',
    method: 'get',
    params: query
  })
}

export function updateDrug(data) {
  return request({
    url: '/drug/updateDrug',
    method: 'post',
    data
  })
}

export function createDrug(data) {
  return request({
    url: '/drug/createDrug',
    method: 'post',
    data
  })
}

export function deleteDrug(id) {
  return request({
    url: '/drug/deleteDrug',
    method: 'post',
    params: { id }
  })
}