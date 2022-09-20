import chart from "../../assets/icons/chart.svg";
import { WelcomeLayout } from "./WelcomeLayout";

export const Third = () => (
  <WelcomeLayout>
    {{
      icon: () => <img src={chart} />,
      title: () => (
        <h2>
          数据可视化
          <br />
          收支一目了然
        </h2>
      ),
      buttons: () => (
        <>
          <router-link to={"/2"}>上一页</router-link>
          <router-link to={"/4"}>下一页</router-link>
          <router-link to={"/start"}>跳过</router-link>
        </>
      ),
    }}
  </WelcomeLayout>
);
