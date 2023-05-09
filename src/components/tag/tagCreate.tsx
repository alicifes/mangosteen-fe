import { defineComponent, PropType} from "vue";
import { Icon } from "../../shared/Icon";
import { MainLayout } from "../../layouts/MainLayout";
import { TagForm } from "./TagForm";
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
            default: () => <TagForm />,
          }}
        </MainLayout>
      </>
    );
  },
});
