import Vue from 'vue';
import VueRouter from 'vue-router';
import ConfigRoutes from '../config.js';
import store from '../store';

Vue.use(VueRouter)
const router = new VueRouter({
	routes: ConfigRoutes.routes
})

let loginCheck = false;
let isLogin = false;


if(ConfigRoutes.isTestlogin){
	router.beforeEach((to, from, next) => {
		if(!loginCheck){
			store.dispatch('user/login').then(function (res) {
				if(res){
					isLogin = true;
					next();
				}else{
					let target = location.href;
					location.href='http://test.ssa.jd.com/sso/login?ReturnUrl=' + encodeURIComponent(target);
				}
			}).catch(() => {
				let target = location.href;
					location.href='http://test.ssa.jd.com/sso/login?ReturnUrl=' + encodeURIComponent(target);
			});

		}else if(isLogin){
			next();
		}else{
			let target = location.href;
			location.href='http://test.ssa.jd.com/sso/login?ReturnUrl=' + encodeURIComponent(target);
		}
	});
}



export default router
