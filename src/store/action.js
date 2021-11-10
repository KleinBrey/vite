
import state from './state'
const actions = {
  changename (context, val) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('increment', val)
        if (state.name === "866") {
          resolve('成功')
        }
        else {
          reject('失败')
        }
      }, 1000)

    })
  },
}
export default actions