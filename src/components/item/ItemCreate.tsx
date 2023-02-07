import { defineComponent, PropType, ref } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import { Tab, Tabs } from "../../shared/Tabs";
import s from "./ItemCreate.module.scss";
export const ItemCreate = defineComponent({
  props: {
    name: { type: String as PropType<string> },
  },
  setup: (props, context) => {
    const kind = ref('支出')
    return () => (
      <div>
        <MainLayout>
          {{
            title: () => "山竹记账",
            icon: () => <Icon name="back" class={s.navIcon}></Icon>,
            default: () => <div>
              <Tabs selected={kind.value} onUpdateSelected = {(e)=> kind.value = e}>
                <Tab name='收入'>收入</Tab>
                <Tab name= '支出'>支出</Tab>
              </Tabs>
            </div>,
          }}
        </MainLayout>
      </div>
    );
  },
});
