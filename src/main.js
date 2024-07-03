import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import { store } from './store/createStore'
import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';
import 'element-plus/dist/index.css';
import "@/styles/index.scss";

createApp(App).use(store).use(router).mount('#app')

// router.beforeEach((to, from, next) => {
//     // 没有登录状态下只允许访问register 和 login页面
//     let logged_in = store.state.logged_in || localStorage.getItem('islogin') == 'true'
//     if (except_path.includes(to.path)) {
//         next()
//     }
//     else
//         if (!logged_in && to.meta.requireLogin) {
//             console.log('main.js:router:', to.name, '没有登录');
//             ElMessage({
//                 message: '请登录',
//                 type: 'error'
//             })
//             next({ name: 'login' })
//         } else {
//             next()
//         }
// })


router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/Login','/Register', '/chat','/chat_history' ];
    // const publicPages = ['/Login'];
    const authRequired = !publicPages.includes(to.path);
  
    var loggedIn = store.state.loggedIn
  
    if (authRequired && !loggedIn) {
      alert ('请先登陆')
      return next('/Login');
    }
    next();
  })
  
  createApp(App)
    .use(ElementPlus)
    .use(store).use(router).mount('#app')