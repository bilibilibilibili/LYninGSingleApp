/**
 * Created by lyning on 16/1/28.
 */

var Vue = require('vue');
var VueRouter = require('vue-router');

Vue.use(VueRouter);

var router = new VueRouter();
var HomePage = require('./Pages/HomePage.vue');

router.map({
	'/': {component: HomePage}
});

router.start(HomePage, '#app');