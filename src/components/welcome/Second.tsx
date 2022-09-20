import alarm from "../../assets/icons/alarm.svg";
import { WelcomeLayout } from "./WelcomeLayout";
import { RouterLink } from "vue-router";

export const Second = () => (
  <WelcomeLayout>
    {{
      icon: () => <img src={alarm} />,
      title: () => (
        <h2>
          每日提醒
          <br />
          不会遗漏一笔订单
        </h2>
      ),
      buttons: () => (
        <>
          <RouterLink to={"welcome/1"}>上一页</RouterLink>
          <RouterLink to={"welcome/3"}>下一页</RouterLink>
          <RouterLink to={"welcome/start"}>跳过</RouterLink>
        </>
      ),
    }}
  </WelcomeLayout>
);
