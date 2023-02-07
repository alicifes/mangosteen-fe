import { defineComponent, PropType } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import s from "./ItemCreate.module.scss";
export const ItemCreate = defineComponent({
  props: {
    name: { type: String as PropType<string> },
  },
  setup: (props, context) => {
    return () => (
      <div>
        <MainLayout>
          {{
            title: () => "山竹记账",
            icon: () => <Icon name="back" class={s.navIcon}></Icon>,
            default: () => <div>
                main
            </div>,
          }}
        </MainLayout>
      </div>
    );
  },
});
