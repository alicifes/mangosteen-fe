import { defineComponent, PropType } from "vue";
import { Icon,IconName } from "./Icon";
import s from './FloatButton.module.scss'

export const FloatButton = defineComponent({
  props: {
    iconName:{
      type:String as PropType<IconName>,
      required:true
    }
  },
  setup: (props, context) => {
    return () => <button class={s.floatButton}>
        <Icon class={s.icon} name={props.iconName}/>
    </button>;
  },
});

