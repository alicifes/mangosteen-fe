import { defineComponent, reactive } from 'vue';
import s from './Tag.module.scss';
import { EmojiSelect } from '../../shared/EmojiSelect';
import { Button } from '../../shared/Button';
import { FData, Rules, validate } from "../../shared/validate";

export const TagForm = defineComponent({
    setup:(props,context)=>{
        const formData = reactive({
            name: "",
            sign: "",
          });
          const errors = reactive<{ [k in keyof typeof formData]?: string[] }>({});
          const onSubmit = (e: Event) => {
            const rules: Rules<typeof formData> = [
              { key: "name", type: "required", message: "必填" },
              {
                key: "name",
                type: "pattern",
                regex: /^.{1,4}$/,
                message: "请输入1~4个字符",
              },
              { key: "sign", type: "required", message: "必填" },
            ];
            Object.assign(errors, {
              name: undefined,
              sign: undefined
            })
            Object.assign(errors, validate(formData, rules))
            console.log(errors);
            e.preventDefault();
          };
        return () => <div>
             <form class={s.form} onSubmit={onSubmit}>
                  <div class={s.formRow}>
                    <label class={s.formLabel}>
                      <span class={s.formItem_name}>标签名</span>
                      <div class={s.formItem_value}>
                        <input
                          v-model={formData.name}
                          class={[s.formItem, s.input, s.error]}
                        />
                      </div>
                      <div class={s.formItem_errorHint}>
                        <span>{errors.name?.[0] ?? <span>&nbsp;</span>}</span>
                      </div>
                    </label>
                  </div>
                  <div class={s.formRow}>
                    <labe class={s.formLabel}>
                      <span class={s.formItem_name}>符号 {formData.sign}</span>
                      <EmojiSelect v-model={formData.sign} />
                      <div class={s.formItem_errorHint}>
                        <span>{errors.sign?.[0] ?? " "}</span>
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
        </div>;
    }
})
