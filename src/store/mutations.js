//Mutation 必须是同步函数。原因：异步方法，我们不知道什么时候状态会发生改变，所以也就无法追踪了
//如果我们需要异步操作，Mutations就不能满足我们需求了，这时候我们就需要Actions了
const mutations = {

    //state，即state.js中定义的state，借此可以访问state中定义的全局变量
    //payload: 载荷,保存传递参数的容器
    increment: (state, payload) => {
        //通过载荷为全局参数赋值，相当于setter
        state.count += payload.step;
    }

}

export default mutations
