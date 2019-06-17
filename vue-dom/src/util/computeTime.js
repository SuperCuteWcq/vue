 export const showType=(type,listType)=>{
  if(listType=="overtime"){
    switch(type){
            case 1:
              return "双休日"
            case 2:
              return "节假日"
            case 3:
              return "工作日"
            default:break
    }
  }else{
    switch(type){
            case 1:
              return "年假"
            case 2:
              return "调假"
            default:break
    }
  }
}
export const startTime=(start)=>{
    if(start){
      return new Date(start).toLocaleDateString()
    }else{
      return null
    }
}
export const EndTime=()=>{
return 1
}

