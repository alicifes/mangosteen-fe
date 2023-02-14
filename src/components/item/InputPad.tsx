import { defineComponent, PropType, ref } from "vue";
import { Icon } from "../../shared/Icon";
import s from "./InputPad.module.scss";
import { DatePicker, } from 'vant';
import { time } from "../../shared/time";

export const InputPad = defineComponent({
  props: {
    name: { type: String as PropType<string> },
  },
  setup: (props, context) => {
    const now = new Date()
    const refDate = ref<Date>(now)
    const buttons = [
        { text: '1', onClick: () => { appendText(1) } },
        { text: '2', onClick: () => { appendText(2) } },
        { text: '3', onClick: () => { appendText(3) } },
        { text: '4', onClick: () => { appendText(4) } },
        { text: '5', onClick: () => { appendText(5) } },
        { text: '6', onClick: () => { appendText(6) } },
        { text: '7', onClick: () => { appendText(7) } },
        { text: '8', onClick: () => { appendText(8) } },
        { text: '9', onClick: () => { appendText(9) } },
        { text: '.', onClick: () => { appendText('.') } },
        { text: '0', onClick: () => { appendText(0) } },
        { text: '清空', onClick: () => { } },
        { text: '提交', onClick: () => { } },
      ]
    const appendText = (num:Number | '.') => {
        console.log(num)
    }
    return () => (
      <>
      <DatePicker v-model={refDate.value} title="选择日期"/>
        <span class={s.dateAndAmount}>
            <span class={s.date}>
                <Icon name="date" class={s.icon}/>
                <span class={s.date}>2023-10-11</span>
            </span>
             <span class={s.amount}>199</span>
        </span>
        <div class={s.buttons}>
          {buttons.map((item) => {
            return <button onClick={item.onClick}>{item.text}</button>;
          })}
        </div>
      </>
    );
  },
});
