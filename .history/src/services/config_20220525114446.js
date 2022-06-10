// 本地测试API 
const devBaseURL = "http://127.0.0.1:3000";
const proBaseURL = "http://127.0.0.1:3000";
// 已经部署到服务器上的API
// const devBaseURL = "http://39.102.36.212:3000";
// const proBaseURL = "http://39.102.36.212:3000";
// const devBaseURL = "http://123.207.32.32:9001/";
// const proBaseURL = "http://123.207.32.32:9001/";
export const BASE_URL =
  process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL

export const TIMEOUT = 5000