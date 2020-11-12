import Vue from 'vue'
import App from './App.vue'
import { Button } from 'element-ui';
import ItsComponents from '../packages/index'

Vue.config.productionTip = false

// Vue.prototype.$ELEMENT = { size: 'mini' };
Vue.use(Button)
Vue.use(ItsComponents)

new Vue({
  render: h => h(App),
}).$mount('#app')
