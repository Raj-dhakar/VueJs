const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    // Each event sends a object if nothing is passed to method 
    confirmedInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('Form Submitted')
    }
    , setName(event, lastName) {
      console.log(event);
      this.name = event.target.value + " " + lastName;
    },
    add() {
      this.counter += 1;
    },
    reduce() {
      this.counter -= 1;
    }
  }
});

app.mount('#events');
