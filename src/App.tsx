import { defineComponent, Transition, VNode } from "vue";
import { RouteLocationNormalizedLoaded, RouterView } from "vue-router";
import './assets/stylesheets/vars.scss'
import "./App.scss"

export const App = defineComponent({
  setup() {
    return () => (
      <div class="page">
        <RouterView></RouterView>
      </div>
    );
  },
});
