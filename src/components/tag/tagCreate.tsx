import { defineComponent, PropType } from "vue";
import { Icon } from "../../shared/Icon";
import { MainLayout } from "../../layouts/MainLayout";
import s from "./tagCreate.module.scss";
import { Button } from '../../shared/Button';
import { EmojiSelect } from "../../shared/EmojiSelect";
export const tagCreate = defineComponent({
  props: {
    name: { type: String as PropType<string> },
  },
  setup: (props, context) => {
    return () => (
      <>
        <MainLayout>
          {{
            title: () => "新建标签",
            icon: () => <Icon name="back" onclick={() => {}} />,
            default: () => (
              <div>
                <form class={s.form}>
                  <div class={s.formRow}>
                    <label class={s.formLabel}>
                      <span class={s.formItem_name}>标签名</span>
                      <div class={s.formItem_value}>
                        <input class={[s.formItem, s.input, s.error]}></input>
                      </div>
                      <div class={s.formItem_errorHint}>
                        <span>必填</span>
                      </div>
                    </label>
                  </div>
                  <div class={s.formRow}>
                    <labe class={s.formLabel}>
                      <span class={s.formItem_name}>符号</span>
                      <EmojiSelect />
                      <div class={s.formItem_errorHint}>
                        <span>必填</span>
                      </div>
                    </labe>
                  </div>
                  <p class={s.tips}>记账时长按标签即可进行编辑</p>
                  <div class={s.formRow}>
                    <div class={s.formItem_value}>
                    <Button class={[s.formItem, s.button]}>确定</Button>
                    </div>
                  </div>
                </form>
              </div>
            ),
          }}
        </MainLayout>
      </>
    );
  },
});
