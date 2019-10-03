// import login from "./components/login/Login.vue"
import HomePage from "./components/contents/Home.vue"
import Login from './components/login/Login.vue'




export const routes = [
  {
    path:"/",
    component: HomePage,
    name:"home"
  },
  {
    path: "/login",
    component: Login,
    name: "login"
  }
];
