import api from '../../api/index'
export default{
  namespaced: true,
  state:{//用户信息
    userinfo:{}
  },
  mutations: {
    setuserInfo(state,data){
        state.userinfo=data
    }
  },
  actions:{
    getuserInfo(context){
     api.isLogin().then(res=>{
        context.commit('setuserInfo',res.data)
      })
    }
  }
}
