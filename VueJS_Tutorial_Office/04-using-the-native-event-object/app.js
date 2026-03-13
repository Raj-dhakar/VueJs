const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      fullName: '',
    };
  },
  watch: {
    name(value) {
      if (value === '') this.fullName = '';
      else this.fullName = value;
    },
    lastName(value) {
      if (value === '') this.fullName = this.name;
      else this.fullName = this.name + ' ' + value;
    }
  }
  ,
  computed: {
    // fullName(){
    //   console.log('Running Again !!!!')
    //   if(this.name === '') return '';
    //   else return this.name+' '+'Dhakar';
    // }
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
