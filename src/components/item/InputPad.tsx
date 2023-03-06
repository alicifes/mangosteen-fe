import { defineComponent, PropType, ref } from "vue";
import { Icon } from "../../shared/Icon";
import s from "./InputPad.module.scss";
import { DatePicker, Popup } from "vant";
import 'vant/lib/index.css';
import dayjs from 'dayjs';

export const InputPad = defineComponent({
  props: {
    name: { type: String as PropType<string> },
  },
  setup: (props, context) => {
    const refDate = ref<Array<string>>([dayjs().format('YYYY'),dayjs().format('MM'),dayjs().format('DD')]);
    const refShowPop = ref<Boolean>(false);
    const buttons = [
      {
        text: "1",
        onClick: () => {
          appendText(1);
        },
      },
      {
        text: "2",
        onClick: () => {
          appendText(2);
        },
      },
      {
        text: "3",
        onClick: () => {
          appendText(3);
        },
      },
      {
        text: "清空",
        onClick: () => {
          appendText(3);
        },
      },
      {
        text: "4",
        onClick: () => {
          appendText(4);
        },
      },
      {
        text: "5",
        onClick: () => {
          appendText(5);
        },
      },
      {
        text: "6",
        onClick: () => {
          appendText(6);
        },
      },
      {
        text: "+",
        onClick: () => {
          appendText(6);
        },
      },
      {
        text: "7",
        onClick: () => {
          appendText(7);
        },
      },
      {
        text: "8",
        onClick: () => {
          appendText(8);
        },
      },
      {
        text: "9",
        onClick: () => {
          appendText(9);
        },
      },
      {
        text: "-",
        onClick: () => {
          appendText(".");
        },
      },
      {
        text: ".",
        onClick: () => {
          appendText(".");
        },
      },
      {
        text: "0",
        onClick: () => {
          appendText(0);
        },
      },
      { text: "删", onClick: () => {} },
      { text: "提交", onClick: () => {} },
    ];
    const appendText = (num: Number | ".") => {
      console.log(num);
      console.log(refDate.value);
    };
    return () => (
      <>
        <span class={s.dateAndAmount}>
          <span class={s.date}>
            <Icon name="date" class={s.icon} />
            <span class={s.date} onClick={() => (refShowPop.value = true)}>
              {dayjs().format('YYYY-MM-DD')}
            </span>
            <Popup position="bottom" v-model:show={refShowPop.value}>
              <DatePicker v-model={refDate.value} title="选择日期" />
            </Popup>
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
