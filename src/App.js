import "./styles.css";

import { Router } from "./router/Router";

//ユーザーのデータを作成
const user = {
  name: "マッカート",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "1234@gmail.com",
  phone: "090-1111-2222",
  company: {
    name: "株式会社macart"
  },
  website: "https://google.com"
};

export default function App() {
  return <Router />;
}
