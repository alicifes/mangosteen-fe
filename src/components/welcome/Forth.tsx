import cloud from "../../assets/icons/cloud.svg";
import { WelcomeLayout } from "./WelcomeLayout";
import s from "./First.module.scss";

export const Forth = () => (
  <WelcomeLayout>
    {{
      icon: () => <img src={cloud} class={s.icon} />,
      title: () => (
        <h2>
          数据可视化
          <br />
          收支一目了然
        </h2>
      ),
      buttons: () => (
        <>
          <router-link to={"/2"} className={s.fake}>
            上一页
          </router-link>
          <router-link to={"/4"}>开启应用</router-link>
          <router-link to={"/start"} className={s.fake}>
            跳过
          </router-link>
        </>
      ),
    }}
  </WelcomeLayout>
);
