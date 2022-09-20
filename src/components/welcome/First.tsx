import pig from "../../assets/icons/pig.svg";
import { WelcomeLayout } from "./WelcomeLayout";
import s from "./WelcomeLayout.module.scss";
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

export const First = () => (
  <WelcomeLayout>
    {{
      icon: () => <img src={pig} class={s.icon} />,
      title: () => (
        <h2>
          会省钱
          <br />
          还要会挣钱
        </h2>
      ),
      buttons: () => (
        <>
          <router-link to={"/"} className={s.fake}>
            跳过
          </router-link>
          <router-link to={"/2"}>下一页</router-link>
          <router-link to={"/start"}>跳过</router-link>
        </>
      ),
    }}
  </WelcomeLayout>
);
