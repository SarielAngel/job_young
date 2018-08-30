// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import MintUi from 'mint-ui';
import 'mint-ui/lib/style.css';
import { MessageBox } from 'mint-ui';
import { Radio } from 'mint-ui';
import { Cell } from 'mint-ui';
import { Field } from 'mint-ui';
import { Toast } from 'mint-ui';
import { Picker } from 'mint-ui';
import axios from './web';
import { Spinner } from 'mint-ui';
import store from './store';
import { Search } from 'mint-ui';
import { Popup } from 'mint-ui';
import oss from './oss';
import timeFormat from './timeFormat';
import { InfiniteScroll } from 'mint-ui';

window.InfiniteScroll = InfiniteScroll;
Vue.use(InfiniteScroll);

Vue.component(Radio.name, Radio);


window.MessageBox = MessageBox;
window.Toast = Toast;

Vue.config.productionTip = false;
Vue.component(Cell.name, Cell);
Vue.component(Field.name, Field);
Vue.use(MintUi);
Vue.config.productionTip = false;
Vue.use(MintUi);
Vue.prototype.$http = axios;
Vue.prototype.$oss = oss;
Vue.component(Picker.name, Picker);
Vue.component(Spinner.name, Spinner);
Vue.component(Search.name, Search);
Vue.component(Popup.name, Popup);
Vue.prototype.$timeFormat = timeFormat;

//拦截器
router.beforeEach((to,from,next) => {
	console.log(to);
	console.log(from);
	console.log(to.name);
	next();
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
