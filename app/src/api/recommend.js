import jsonp from '../common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'


export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'

  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}


export function getDiscList() {
    const url = '/api/getDiscList' //访问定义的路由
  
    const data = Object.assign({}, commonParams, {
      platform: 'yqq',
      hostUin: 0,
      sin: 0,
      ein: 29,
      sortId: 5,
      needNewCode: 0,
      categoryId: 10000000,
      rnd: Math.random(),
      format: 'json'

    })
    return axios.get(url,{ //返回一个promise
        params: data
    }).then(res => {
        return Promise.resolve(res.data)
    })
  }