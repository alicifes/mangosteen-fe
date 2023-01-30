import { defineComponent, PropType } from "vue";
import s from "./Navbar.module.scss";

export const Navbar = defineComponent({
  setup: (props, context) => {
    const { slots } = context;
    return () => (
      <div class={s.navbar}>
        <span class={s.title_wrapper}>{slots.icon?.()}</span>
        <span class={s.icon_wrapper}>{slots.default?.()}</span>
      </div>
    );
  },
});
