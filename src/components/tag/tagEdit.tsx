import { defineComponent, PropType } from "vue";
import s from "./Tag.module.scss";
import { TagForm } from "./TagForm";
import { MainLayout } from "../../layouts/MainLayout";
import { Icon } from "../../shared/Icon";
import { Button } from "../../shared/Button";
export const TagEdit = defineComponent({
  setup: (props, context) => {
    return () => (
      <MainLayout>
        {{
          title: () => "编辑标签",
          icon: () => <Icon name="back" onclick={() => {}} />,
          default: () => (
            <>
              <TagForm />
              <div class={s.actions}>
                <Button level="danger" class={s.removeTags} onClick={() => {}}>
                  删除标签
                </Button>
                <Button
                  level="danger"
                  class={s.removeTagsAndItems}
                  onClick={() => {}}
                >
                  删除标签和记账
                </Button>
              </div>
            </>
          ),
        }}
      </MainLayout>
    );
  },
});
