import { defineComponent, PropType } from 'vue';
import s from './Navbar.module.scss'

export const Navbar = defineComponent({
    props:{
        name:{type:String as PropType<name>}
    },
    setup:(props,context)=>{
        const {slots} = context
        return () => <div class={s.navbar}>
            {slots.icon?.()}
            {slots.default?.()}
        </div>;
    }
})