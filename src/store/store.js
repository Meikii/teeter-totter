import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        rectangle: {
            weight: 6, // Math.floor(Math.random() * 10),
            position: 1
        },
        triangle: {
            weight: 1,
            position: 5
        },
        circle: {
            weight: 1,
            position: 4
        },
        leftSide: 0,
        rightSide: 0,
        lineAngle: 0
    }
});