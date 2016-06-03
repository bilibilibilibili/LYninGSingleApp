/**
 * Created by lyning on 16/1/28.
 */

import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

var router = new VueRouter();
import HomePage from './Pages/HomePage.vue';

router.map({
    '/': {component: HomePage}
});

router.start(HomePage, '#app');