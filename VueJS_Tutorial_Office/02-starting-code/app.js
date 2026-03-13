const app=Vue.createApp({
    data(){
        return {
            courseGoalA: 'Finish the Course and Learn Vue!!',
            courseGoalB: '<h2>Master Vue and build amazing apps!!</h2>',
            vueLink: 'https://vuejs.org/guide/quick-start.html',
        };
    },
    methods:{
        outputGoal(){
            const randomNumber=Math.random();
            if(randomNumber<0.5) return this.courseGoalA;
            else return this.courseGoalB;
        }
    }
});

app.mount("#user-goal");