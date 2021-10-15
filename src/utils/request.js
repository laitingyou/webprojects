import axios from "axios";
const instance = axios.create({
  baseURL: 'https://api.service-online.cn',
  timeout: 10000,
  headers: {}
});
export default async function (data = {}){
  const res = await instance({
    method: 'GET',
    header: {
      'authorization': localStorage.getItem('token')
    },
    ...data
  })
  if(res.data && res.data.code !== 0) throw new Error(res.data.message)
  if(res.status !== 200) throw new Error('请求失败')
  console.log(res.data)
  return res
}
