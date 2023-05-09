import { defineComponent, PropType } from 'vue';
export const ItemSummary = defineComponent({
    props:{
        name:{type:String as PropType<name>}
    },
    setup:(props,context)=>{
        return () => <div>12312312</div>;
    }
})