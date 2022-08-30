import { Tab } from "../views/Tab";
import { Bar } from "../views/Bar";
import { RouteRecordRaw } from "vue-router";
import { Welcome } from "../views/Welcome";
import { First } from "../welcome/first";
import { Second } from "../welcome/second";
import { Third } from "../welcome/third";
import { Forth } from "../welcome/forth";

export const routes: RouteRecordRaw[] = [
  { path: "/", component: Tab },
  { path: "/bar", component: Bar },
  {
    path: "/welcome",
    component: Welcome,
    children: [
      { path: "1", component: First },
      { path: "2", component: Second },
      { path: "3", component: Third },
      { path: "4", component: Forth },
    ],
  },
];
