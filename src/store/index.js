import Vue from "vue";
import Vuex from "vuex";
import { normalize, schema } from "normalizr";

Vue.use(Vuex);

// Define a test dataset to illustrate our schema
// As you can see it has a clear nested structure
const apiData = () => ({
  id: 1,
  title: "Round #1",
  description: "This round is all about historical knowledge",
  questions: [
    {
      id: 1,
      question: "What year did Columbus arrive in present America?",
      answers: [
        { id: 1, answer: "1492" },
        { id: 2, answer: "1800" },
        { id: 3, answer: "1920" }
      ]
    },
    {
      id: 2,
      question: "What year was the eifel tower in Paris built?",
      answers: [
        { id: 3, answer: "1200" },
        { id: 4, answer: "1887" },
        { id: 5, answer: "2007" }
      ]
    }
  ]
});
//vuex中使用[常量]来使用常量

//定义答案的实体
const answer = new schema.Entity("answer");

//定义包含答案数组的定义的实体
const question = new schema.Entity("questions", {
  answer: [answer]
});

//定义包含一系列问题的回合实体
const round = new schema.Entity("rounds", {
  questions: [question]
});

const state = {
  entities: {
    answers: {},
    questions: {},
    rounds: {}
  }
};

const actions = {
  fetchData({ commit }) {
    //用自己的api替换这一行
    const response = apiData();
    console.log(response);
    //重要的是，根据我们的模式将响应normalizr(规范化)
    const normalizedEntity = normalize(response, round);
    console.log(normalizedEntity);
    commit("updateEntities", { entities: normalizedEntity.entities });
  }
};

const mutations = {
  updateEntities(state, { entities }) {
    //循环我们收到的所有类型的实体
    for (let type in entities) {
      for (let entity in entities[type]) {
        const oldObj = state.entities[type][entity] || {};
        //合并旧对象中的新数据
        //Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
        const newObj = Object.assign(oldObj, entity[type][entity]);
        //确保新实体也是反应性的
        Vue.set(state.entities[type], entity, newObj);
      }
    }
  }
};

export default new Vuex.Store({
  state,
  actions,
  mutations
});
