import { defineComponent } from "vue";
import s from './First.module.scss'
import pig from '../assets/icons/pig.svg'

export const First = defineComponent({
  setup() {
    return () => (
        <div class={s.wrapper}>
          <div class={s.card}>
            <img src={pig} />
            <h2>会省钱<br/>还要会挣钱</h2>
          </div>
          <div class={s.actions}>
              <router-link to={'/'} class={s.fake}>跳过</router-link>
              <router-link to={'/2'}>下一页</router-link>
              <router-link to={'/start'}>跳过</router-link>
          </div>
        </div>)
  },
});
