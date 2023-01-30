import { defineComponent, PropType } from 'vue';
import s from './Center.module.scss'

const directionMap = {
    '-': 'horizontal',
    '|': 'vertical',
    'horizontal': 'horizontal',
    'vertical': 'vertical'
  }

export const Center = defineComponent({
    props:{
        direction:{type:String as PropType<'-' | '|' | 'horizontal' | 'vertical'>,
        default:'horizontal',
    }
    },
    setup:(props,context)=>{
        return () => <div class={[s.center,directionMap[props.direction]]}>
            {context.slots.default?.()}
        </div>;
    }
})