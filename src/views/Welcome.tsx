import { defineComponent } from "vue";
import logo from '../assets/icons/mangonsteen.svg'
import s from './Welcome.module.scss'
export const Welcome = defineComponent({
  setup() {
    return () => (
      <div class={s.wrapper}>
        <header>
          <img src={logo} />
          <div>山竹记账</div>
        </header>
        <main>
          <router-view></router-view>
        </main>
      </div>
    );
  },
});
