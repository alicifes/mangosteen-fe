import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import './assets/stylesheets/vars.scss'
import "./App.scss"

export const App = defineComponent({
  setup() {
    return () => (
      <div>
        <RouterView></RouterView>
      </div>
    );
  },
});
