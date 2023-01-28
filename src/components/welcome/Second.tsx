//import alarm from "../../assets/icons/alarm.svg";
import s from './Welcome.module.scss'
import {FunctionalComponent} from "vue";

export const Second:FunctionalComponent= () => (
    <div class={s.card}>
      <svg>
        <use xlinkHref="#alarm"></use>
      </svg>
      <h2>每日提醒<br/>不遗漏每一笔账单</h2>
    </div>
    )
;

Second.displayName = 'Second'