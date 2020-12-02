import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faEnvelope,
  faHouseUser,
  faUsers,
  faTshirt,
  faHistory,
  faTasks,
  faPen,
  faTrashAlt,
  faTimes,
  faPlusCircle,
  faSearchPlus,
  faBars
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faBars, faSearchPlus, faPlusCircle, faTimes, faTrashAlt, faPen, faUser, faUserPlus, faSignInAlt, faSignOutAlt, faEnvelope,faHouseUser, faUsers, faTshirt, faTasks ,faHistory);

Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
