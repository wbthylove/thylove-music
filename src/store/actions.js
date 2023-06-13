/*
 * Action与mutation定义语法类型，不同点：
 * 1) Action提交的是mutation，而不是直接变更状态，mutation直接变更状态
 * 2) Action可以包含任意异步操作
 * 3) Action的回调函数接收一个 context 上下文参数
 * 详见方法内的注释
 */
const actions = {

    /*
     * context为上下文参数，与 store 实例有着相同的方法和属性
     * context参数包含：state、rootState、getters、mutations、actions 五个属性
     * payload为负载，是一个存放需要传递的参数的容器，和mutations的含义一致
     */
    setCountAsyn: function(context, payload) {

        //异步操作，第一个参数为一个匿名函数，第二参数为延迟的时间，单位为毫秒。
        //作用：在3秒或调用第一个参数定义的匿名函数。
        setTimeout(function() {

            //action提交的是mutation，而不能直接变更状态
            //第一个参数setPersonName即为mutation中定义的方法名
            //payload即为参数容器。
            //通过context的commit方法提交一个mutation，由mutation负责
            //修改参数，action负责提供异步功能，（mutation必须是同步的）
            context.commit('increment', payload);
        }, 3000);
    }

}

export default actions
