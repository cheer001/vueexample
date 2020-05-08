import Vue from "vue";
// import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// import prop from "./views/Prop/prop";
// import eimt from "./views/emit/emit";
// import sync from "./views/sync/sync";
// import AL from "./views/attrs&listeners/person.vue";
// import pi from "./views/provide&inject/person";
// import eventBus from "./views/EventBus/eventBus.vue";
// import vmodel from "./views/vmodel/person.vue";
// import ref from "./views/ref/person.vue";
import lifecycle from "./views/lifecycle/person.vue";

//测试revert2
//在iss53问题上修改1,2,3

//新问题hotfix 1,2,3

//1,2

//git rebase -i HEAD~~

//第一次改动
//第二次改动
//第三次改动
//把第一次提交的东西与第三次提交的东西edit

Vue.config.productionTip = false;
Vue.prototype.EventBus = new Vue();

new Vue({
  router,
  store,
  render: h => h(lifecycle)
  // render: h => h(ref)
  // render: h => h(vmodel)
  // render: h => h(eventBus)
  // render: h => h(pi)
  // render: h => h(AL)
  // render: h => h(sync)
  // render: h => h(eimt)
  // render: h => h(prop)
}).$mount("#app");

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");
