import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        rectangle: {
            weight: 6, // Math.floor(Math.random() * 10),
            position: 4
        },
        triangle: {
            weight: 6,
            position: 0
        },
        circle: {
            weight: 6,
            position: 4
        },
        leftSide: 0,
        rightSide: 0,
        lineAngle: 0
    }
});