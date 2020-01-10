import Vue from 'vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue'
import {
    store
} from './store/store';

let myApp = new Vue({
    el: '#app',
    data: {

        // keyCode: ''

    },
    methods: {
        // handleGlobalKeyDown(e) {
        //     this.keyCode = e.keyCode
        //     console.log(e)
        // }
    },
    store: store,
    render: h => h(App)

})

// window.addEventListener('keydown', function(e) {
//     myApp.handleGlobalKeyDown(e)
// });