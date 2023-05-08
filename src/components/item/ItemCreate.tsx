import { defineComponent, PropType, ref } from "vue";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import { Tab, Tabs } from "../../shared/Tabs";
import { InputPad } from "./InputPad";
import s from "./ItemCreate.module.scss";
export const ItemCreate = defineComponent({
  props: {
    name: { type: String as PropType<string> },
  },
  setup: (props, context) => {
    const kind = ref("支出");
    const refExpenseTags = ref([
      { id: 1, name: "打车", sign: "$", category: "expense" },
      { id: 2, name: "大大", sign: "$", category: "expense" },
      { id: 3, name: "得到", sign: "$", category: "expense" },
      { id: 4, name: "我是", sign: "$", category: "expense" },
    ]);
    const refIncomeTags = ref([
      { id: 1, name: "工资", sign: "$", category: "income" },
      { id: 2, name: "彩票", sign: "$", category: "income" },
      { id: 3, name: "代打", sign: "$", category: "income" },
      { id: 4, name: "实打", sign: "$", category: "income" },
    ]);
    return () => (
      <>
        <div>
          <MainLayout>
            {{
              title: () => "山竹记账",
              icon: () => <Icon name="back" class={s.navIcon}></Icon>,
              default: () => (
                <div class={s.wrapper}>
                  <Tabs v-model:selected={kind.value} class={s.tabs}>
                    <Tab name="收入" class={s.tags_wrapper}>
                      <div class={s.tag}>
                        <div class={s.sign}>
                          <Icon name="add" class={s.createTag} />
                        </div>
                        <div class={s.name}>新增</div>
                      </div>
                      {refIncomeTags.value.map((tag) => {
                        return (
                          <div class={[s.tag, s.selected]}>
                            <div class={s.sign}>{tag.sign}</div>
                            <div class={s.name}>{tag.name}</div>
                          </div>
                        );
                      })}
                    </Tab>
                    <Tab name="支出" class={s.tags_wrapper}>
                      <div class={s.tag}>
                        <div class={s.sign}>
                          <Icon name="add" class={s.createTag} />
                        </div>
                        <div class={s.name}>新增</div>
                      </div>
                      {refExpenseTags.value.map((tag) => {
                        return (
                          <div class={[s.tag, s.selected]}>
                            <div class={s.sign}>{tag.sign}</div>
                            <div class={s.name}>{tag.name}</div>
                          </div>
                        );
                      })}
                    </Tab>
                  </Tabs>
                  <div class={s.inputPad_wrapper}>
                    <InputPad />
                  </div>
                </div>
              ),
            }}
          </MainLayout>
        </div>
      </>
    );
  },
});
