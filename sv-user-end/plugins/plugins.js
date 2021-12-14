import Vue from 'vue'
import Vuelidate from 'vuelidate'
import vClickOutside from 'v-click-outside'
import Draggable from 'vuedraggable'

Vue.component('draggable', Draggable);

Vue.use(Vuelidate)
Vue.use(vClickOutside)