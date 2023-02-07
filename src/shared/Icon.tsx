import { defineComponent, PropType } from "vue";
import s from './Icon.module.scss'

export type IconName = 'add' | 'charts' | 'clock' | 'cloud' | 'mangosteen' | 'pig' | 'menu' | 'export' | 'notify' | 'back'

export const Icon = defineComponent({
  props: {
    name: {
        type: String as PropType<IconName>,
        required:true
    },
    onclick:{
      type: Function as PropType<(e:MouseEvent) => void>
    }
},
  setup: (props, context) => {
    return () => (
      <svg class={s.icon} onClick={props.onclick}>
        <use xlinkHref={"#" + props.name}></use>
      </svg>
    );
  },
});