import "./assets/main.css";
import "primeicons/primeicons.css";
import "vue-toastification/dist/index.css";
import Toast from "vue-toastification";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const options = {
  position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
};
app.use(router);
app.use(Toast, options);
app.mount("#app");
