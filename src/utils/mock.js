const Mock = require('mockjs')
//拦截ajax生成伪数据
const Random = Mock.Random
let Result = {
    code: 200,
    msg: '操作成功',
    data:null
}
Mock.mock("/note", 'get',() => {  //正则匹配地址,和下面get请求的地址保持一致
    Result.data = {
        token: Random.string(32),

    }
    return Result;
})


