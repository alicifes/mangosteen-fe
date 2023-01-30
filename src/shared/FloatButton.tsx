import { defineComponent } from "vue";
import { Icon } from "./Icon";
import s from './FloatButton.module.scss'

export const FloatButton = defineComponent({
  setup: (props, context) => {
    return () => <button class={s.floatButton}>
        <Icon class={s.icon} name={'add'}/>
    </button>;
  },
});

