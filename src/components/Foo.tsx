import { ref } from '@vue/reactivity'

const count = ref(0)

setInterval(() => {
  count.value++
}, 1000)

export default (props: { msg: string; }) => (
  <div>
    <h1>tsx使用</h1>
    <p>{ props.msg }</p>
    <p>count: { count.value }</p>
  </div>
)
