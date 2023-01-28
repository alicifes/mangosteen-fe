import { computed, onMounted, ref, Ref } from "vue"

type Point = {x:number,y:number}

export const useSwipe = (element:Ref<HTMLElement | null>) => {
    const start = ref<Point>()
    const end = ref<Point>()
    const swiping = ref(false)
    const distance = computed(() => {

    })
    const direction = computed(()=>{

    })
    onMounted(()=> {
        element.value?.addEventListener('touchstart',e => {
            console.log('start');
        })
        element.value?.addEventListener('touchmove',e => {
            console.log('move');
        })
        element.value?.addEventListener('touchend',e => {
            console.log('end');
        })
    })
}