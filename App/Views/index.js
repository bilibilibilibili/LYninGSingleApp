/**
 * Created by lyning on 16/1/28.
 */

var VueRouter = require('vue-router');
var router = new VueRouter();

var HomePage = require('./Components/HomePage.js');

router.map({
	'/': {component: HomePage}
})

router.start(HomePage);