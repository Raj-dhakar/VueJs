<template>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong>{{ friend.phone }}</li>
        <li><strong>email:</strong>{{ friend.email }}</li>
    </ul>
    <hr> 
</template>

<script>
    export default{
        data(){
            return{
                detailsAreVisible: false,
                friend:{
                    id:'manuel',
                    name:'Manuel Lorenz',
                    phone:'1234567890',
                    email:'manuel@gmail.com'
                },
            };
        },
        methods:{
            toggleDetails(){
                this.detailsAreVisible=!this.detailsAreVisible;
            }
        }
    }
</script>