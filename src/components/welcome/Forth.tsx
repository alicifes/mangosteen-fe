import cloud from "../../assets/icons/cloud.svg";
import s from "./Welcome.module.scss";
import {FunctionalComponent} from "vue";

export const Forth:FunctionalComponent = () => (
    <div class={s.card}>
      <img class={s.icon} src={cloud}/>
      <h2>每日提醒<br/>不遗漏每一笔账单</h2>
    </div>
);

Forth.displayName = 'Forth'