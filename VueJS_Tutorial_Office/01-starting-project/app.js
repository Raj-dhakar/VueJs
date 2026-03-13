Vue.createApp({
    data(){
        return {
            goals:[],
            enteredValue:''
        }
    },
    methods:{
        addGoal(){
            this.goals.push(this.enteredValue)
            this.enteredValue=''
        }
    }
}).mount("#app")


// const button= document.querySelector('button')
// const input =document.querySelector('input')
// const listEl=document.querySelector('ul')

// function addGoal(){
//     const enterValue=input.value;
//     const listItemEl=document.createElement('li');
//     listItemEl.textContent=enterValue;
//     listEl.appendChild(listItemEl);
//     input.value='';
// }

// button.addEventListener('click',addGoal)