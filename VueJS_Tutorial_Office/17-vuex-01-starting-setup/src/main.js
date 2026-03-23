import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const app = createApp(App);
const store= createStore({
    state(){
        return {
            counter :0,
            isLoggedIn: false,
        };
    },
    mutations: {
        increment(state){
            state.counter =state.counter+2;
        },
        increase(state,payload){
            state.counter=state.counter+ payload.value;
        },
        setAuth(state,payload){
            state.isLoggedIn=payload.isAuth;
        }
    },
    actions: {
        increment(context) {
            setTimeout(function(){
                context.commit('increment');
            }, 2000);
        },
        increase(context,payload){
            context.commit('increase',payload);
        },
        login(context){
            context.commit('setAuth',{isAuth: true});
        },
        logout(context){
            context.commit('setAuth',{isAuth: false});
        },
    },
    getters: {
        finalCounter(state){
            return state.counter +2;
        },
        normalizedCounter(state,getters) {
            if(getters.finalCounter<0) return 0;
            if(getters.finalCounter> 100) return 100;
            return getters.finalCounter;
        }
    },
    userIsAuthenticated(state){
        return state.isLoggedIn;
    }
});

app.use(store);
app.mount('#app');
