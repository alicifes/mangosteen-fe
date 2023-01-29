import { defineComponent } from "vue";
import { Button } from "../shared/Button";
import s from "./StartPage.module.scss";

export const StartPage = defineComponent((props, context) => {
  const onClick = () => {
    console.log("click");
  };
  return () => (
    <>
      <div class={s.button_wrapper}>
        <Button class={s.button} onClick={onClick}>欢迎</Button>
      </div>
    </>
  );
});
