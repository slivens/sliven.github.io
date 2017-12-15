import axios from 'axios'

export async function showall (pages = 1, limits = 10) {
  const url = `/topics?page=${pages}&limit=${limits}`
  let response = await axios.get(url)
  let data = response.data.data
  return data
}
/**
 *
 * @param {*} pages
 * @param {*} limits
 * @param {*} tabs类型分类
 */
export async function showTab (pages = 1, limits = 20, tabs) {
  const url = `/topics?page=${pages}&limit=${limits}&tab=${tabs}`
  let response = await axios.get(url)
  let data = response.data.data
  return data
}

export async function showdetail (id) {
  const detailUrl = '/topic'
  let response = await axios.get(detailUrl + '/' + id)
  let data = response.data.data
  return data
}
