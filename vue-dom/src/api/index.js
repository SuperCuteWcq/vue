import request from "../util/request"
const api={
  // api/user/info用来获取用户是否登录的
  isLogin(){
    return request.get('/api/user/info')
  },
  // api/login 用户登录
  userLogin:(data)=>request.post('/api/login',data),
  // /api/task/list  获取首页数据
  taskList:(data)=>request.get('/api/task/list',data),
  // 获取加班详情数据和休假详情数据
  overtimeDetail:(data)=>request.get('/api/apply/overtime',data),
  vacationDetail:(data)=>request.get('/api/apply/vacation',data),
  //上传图片的接口
  submitFile:(filedata)=>request.post('/api/upload',filedata),
  //提交加班
  submitovertime:(data)=>request.post('/api/apply/overtime',data),
  //提交休假
  submitvacation:(data)=>request.post('/api/apply/vacation',data)

}
export default api
