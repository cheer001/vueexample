import Vue from "vue";
// import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
// import prop from "./views/Prop/prop";
// import eimt from "./views/emit/emit";
// import sync from "./views/sync/sync";
import AL from "./views/attrs&listeners/person.vue";
// import pi from "./views/provide&inject/person";
// import eventBus from "./views/EventBus/eventBus.vue";
// import vmodel from "./views/vmodel/person.vue";
// import ref from "./views/ref/person.vue";

Vue.config.productionTip = false;
Vue.prototype.EventBus = new Vue();

new Vue({
  router,
  store,
  // render: h => h(ref)
  // render: h => h(vmodel)
  // render: h => h(eventBus)
  // render: h => h(pi)
  render: h => h(AL)
  // render: h => h(sync)
  // render: h => h(eimt)
  // render: h => h(prop)
}).$mount("#app");

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount("#app");
