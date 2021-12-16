import axios from 'axios'

const headers = {
  'content-Type':'application/json',
  'X-Naver-Client-Id':'24o3iaNGIKDHeLBZsljC',
  'X-Naver-Client-Secret':'zl7H3LlsTu',
}

export const productApi = {
  async getProduct(query) {
    return await axios({
      url : `/v1/search/shop.json?query=${query}`,
      method : 'GET',
      headers,
    })
  }
}
  // "proxy": "https://openapi.naver.com",
export const autoSearchWordApi = {
  async getSearchWord(relatedWord) {
    return await axios({
      url : `/mobile/ac?_q_enc=UTF-8&st=1&frm=mobile_nv&r_format=json&r_enc=UTF-8&r_unicode=0&t_koreng=1&ans=1&run=2&rev=4&q=${relatedWord}`,
      method : 'GET',
      headers
    })
  }
}

