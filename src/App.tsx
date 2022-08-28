import {defineComponent} from 'vue';

export const App = defineComponent({
  setup(){
    return () => <>
      <div>11111</div>
      <div>
        <router-link to={'/'}>tab</router-link>
      </div>
      <div>
        <router-link to={'/bar'}>bar</router-link>
      </div>
      <router-view></router-view>
    </>
  }
})