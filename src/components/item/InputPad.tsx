import { defineComponent, PropType } from "vue";
import { Icon } from "../../shared/Icon";
import s from "./InputPad.module.scss";
export const InputPad = defineComponent({
  props: {
    name: { type: String as PropType<string> },
  },
  setup: (props, context) => {
    const buttons = [
      {
        text: 1,
        onClick: () => {
          console.log("1");
        },
      },
      {
        text: 2,
        onClick: () => {
          console.log("1");
        },
      },
      {
        text: 3,
        onClick: () => {
          console.log("1");
        },
      },
      {
        text: '+',
        onClick: () => {
          console.log("1");
        },
      },
      {
        text: 1,
        onClick: () => {
          console.log("1");
        },
      },
      {
        text: 1,
        onClick: () => {
          console.log("1");
        },
      },
      {
        text: 1,
        onClick: () => {
          console.log("1");
        },
      },
      {
        text: 1,
        onClick: () => {
          console.log("1");
        },
      },
      {
        text: 1,
        onClick: () => {
          console.log("1");
        },
      },
      {
        text: 1,
        onClick: () => {
          console.log("1");
        },
      },
      {
        text: 1,
        onClick: () => {
          console.log("1");
        },
      },
      {
        text: 1,
        onClick: () => {
          console.log("1");
        },
      },
      {
        text: 1,
        onClick: () => {
          console.log("1");
        },
      },
      {
        text: 1,
        onClick: () => {
          console.log("1");
        },
      },
      {
        text: 1,
        onClick: () => {
          console.log("1");
        },
      },
      {
        text: 1,
        onClick: () => {
          console.log("1");
        },
      },
    ];
    return () => (
      <>
        <span class={s.notes}>
          <Icon name="date" />
          <input />
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
