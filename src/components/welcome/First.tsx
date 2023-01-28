import pig from "../../assets/icons/pig.svg";
import s from "./Welcome.module.scss";
import {FunctionalComponent} from "vue";
// export const First = defineComponent({
//   setup() {
//     return () => (
//         <div class={s.wrapper}>
//           <div class={s.card}>
//             <img src={pig} />
//             <h2>会省钱<br/>还要会挣钱</h2>
//           </div>
//           <div class={s.actions}>
//               <router-link to={'/'} class={s.fake}>跳过</router-link>
//               <router-link to={'/2'}>下一页</router-link>
//               <router-link to={'/start'}>跳过</router-link>
//           </div>
//         </div>)
//   },
// });

export const First: FunctionalComponent = () => {
  return <div class={s.card}>
    <svg>
      <use xlinkHref='#pig'></use>
    </svg>
    <h2>会挣钱<br/>还会省钱</h2>
  </div>
};
