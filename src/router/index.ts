import Vue from 'vue';
import VueRouter from 'vue-router';
import AnimalIndex from '../views/AnimalIndex.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'AnimalIndex',
    component: AnimalIndex,
  },
  {
    path: '/animals/:id',
    name: 'show animal',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/ShowAnimal.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
