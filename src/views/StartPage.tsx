import { defineComponent, ref } from "vue";
import { Button } from "../shared/Button";
import { Center } from "../shared/Center";
import { FloatButton } from "../shared/FloatButton";
import { Icon } from "../shared/Icon";
import { Navbar } from "../shared/Navbar";
import { Overlay } from "../shared/Overlay";
import s from "./StartPage.module.scss";

export const StartPage = defineComponent((props, context) => {
  const overlayVisible = ref(false)
  const onClick = () => {
    console.log("click");
  };
  const onClickMenu = () => {
    overlayVisible.value = !overlayVisible.value
  }
  return () => (
    <>
    <Navbar>{
      {
        default: () =>'山竹记账',
        icon: () => <Icon name='menu' class={s.navIcon} onclick={onClickMenu}></Icon>
      }
    }</Navbar>
    <Center class={s.pig_wrapper}>
      <Icon class={s.pig} name="pig" />
    </Center>
      <div class={s.button_wrapper}>
        <Button class={s.button} onClick={onClick}>开始记账</Button>
      </div>
      <FloatButton />
      {overlayVisible.value && <Overlay onClose={() => overlayVisible.value = false} />}
    </>
  );
});
