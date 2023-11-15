import { createApp } from 'vue';
import App from './App.vue';
import "./css/style.scss";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  once: false,
  anchorPlacement: 'top-center',
  startEvent: 'DOMContentLoaded',
  duration: 2000,
});

const app = createApp(App);
app.use(AOS);
app.mount("#app");
