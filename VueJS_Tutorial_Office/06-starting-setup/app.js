const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValues:'',
      goals: [],
     };
  },
  methods:{
    addGoal(){
      this.goals.push(this.enteredGoalValues);
      this.enteredGoalValues='';
    },
    removeGoal(indx){
      this.goals.splice(indx,1);
    }
  }
});

app.mount('#user-goals');
