import request from '@/utils/request'

export function getUnfinished(query) {
  return request({
    url: '/order/unfinished',
    method: 'get',
    params: query 
  })
}

export function getFinished(query){
    return request({
        url: '/finished/getFinished',
        method: 'get',
        params: query
    })
}