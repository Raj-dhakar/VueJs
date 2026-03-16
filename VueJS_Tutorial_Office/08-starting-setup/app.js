const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message=this.$refs.userInput.value;
    },
  },
  beforeCreate(){ // Before App was Created
    console.log('beforeCreate()');
  },
  created(){ // App is created but not mounted till Now.
    console.log('created()');
  },
  beforeMount(){
    console.log('beforeMount()');
  },
  mounted(){
    console.log('mounted()');
  },
  beforeUpdate(){
    console.log('Before Update!!');
  },
  updated(){
    console.log('updated');
  },
  beforeUnmount(){
    console.log('Before Unmount');
  },
  unmounted(){
    console.log('Unmounted!!');
  }
});

const app2=Vue.createApp({
  template:`
  <p> {{favouriteMeal}}</p>
  `
  ,
    data(){
      return {
        favouriteMeal: 'Pizza'
      }
    }
});

app.mount('#app');
app2.mount('#app2');