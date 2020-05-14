import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';
import App from './components/App';

import 'font-awesome/css/font-awesome.css';
import './css/flex.styl';

Vue.use(vueCustomElement);
Vue.customElement('cb-notification', App);

// export default App;