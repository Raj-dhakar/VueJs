const app = Vue.createApp({
    data() {
        return {
            friends: [
                
                {
                    id: 'dfAFDS',
                    name: 'FSDFSDFSD',
                    phone: 'FSDFDS',
                    email: 'FSADFASD',
                },
            ]
        }
    }
});

app.component('friend-contact', {
    template: `10- 
     <li >
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails(friend.id )">Show Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
          </ul>
        </li>
        `
    ,
    data() {
        return {
            detailsAreVisible: false,
            friend:{
                    id: 'Raj',
                    name: 'Raj dhakar',
                    phone: '9098320409',
                    email: 'rajdhakar246@gmail.com',
                 }
            }
    },
    methods: {
        toggleDetails(id) {
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
})

app.mount('#app')