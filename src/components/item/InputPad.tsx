import { defineComponent, PropType, ref } from "vue";
import { Icon } from "../../shared/Icon";
import s from "./InputPad.module.scss";
import { DatePicker, Popup } from "vant";
import 'vant/lib/index.css';
import dayjs from 'dayjs';


type selectedValues = {
  selectedIndexes:string[],
  selectedOptions:object[],
  selectedValues:string[],
}

export const InputPad = defineComponent({
  props: {
    name: { type: String as PropType<string> },
  },
  setup: (props, context) => {
    const refDate = ref<string[]>([dayjs().format('YYYY'),dayjs().format('MM'),dayjs().format('DD')]);
    const refShowPop = ref<Boolean>(false);
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
      { text: '清空', onClick: () => { refAmount.value = '0' } },
      { text: '提交', onClick: () => { } },
    ]
    const refAmount = ref('0')
    const appendText = (num: Number | ".") => {
      const doNetIndex = refAmount.value.indexOf('.')
      const numString = num.toString()
      if(refAmount.value.length >= 13) return
      if(refAmount.value.length -doNetIndex >2 && doNetIndex >= 0) return
      if(doNetIndex >= 0 && numString === '.') return
      if(refAmount.value.toString() === '0'){
        if(num === '.'){
          refAmount.value = '0.'
          return
        }
        refAmount.value = numString
        return
      }
      refAmount.value += num
    };
    const closePopup = () => {
      refShowPop.value = false
    }
    const setDate = (date:selectedValues) => {
      refDate.value = date.selectedValues
      closePopup()
    }
    return () => (
      <>
        <span class={s.dateAndAmount}>
          <span class={s.date}>
            <Icon name="date" class={s.icon} />
            <span class={s.date} onClick={() => (refShowPop.value = true)}>
              {refDate.value.map((item,index) => {
                if(index === 0) return item
                return `-${item}`
              })}
            </span>
            <Popup position="bottom" v-model:show={refShowPop.value}>
              <DatePicker modelValue={refDate.value} title="选择年月日" onConfirm={(date) => setDate(date)} onCancel={() => closePopup()}/>
            </Popup>
          </span>
          <span class={s.amount}>{refAmount.value}</span>
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
