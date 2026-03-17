<template>
  <h2>
    {{ name }}
    {{ favourite ? "(Favourite)" : "" }}
  </h2>
  <button @click="toggleFavourite">Toggle Favourite:</button>
  <button @click="toggleDetails">
    {{ detailsAreVisible ? "Hide" : "Show" }} Details
  </button>
  <ul v-if="detailsAreVisible">
    <li><strong>Phone:</strong>{{ phoneNumber }}</li>
    <li><strong>email:</strong>{{ emailAddress }}</li>
  </ul>
  <button @click="$emit('delete',id)">Delete</button>
    <hr />
</template>

<script>
export default {
  // props:[ 'name','phoneNumber','emailAddress','favourite'],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    favourite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits:{
    'toggle-favourite': function(id){
        if(id) return true;
        else{
            console.warn('Id is missing!!');
            return false;
        }
    }
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    // toggleFavourite(){ // We can't do this once the data data is passed from parent to child , the child can't change it .
    //     if(this.favourite === '1') this.favourite = '0'
    //     else this.favourite = '1'
    // },
    toggleFavourite() {
      console.log("Emitted");
      this.$emit("toggle-favourite", this.id);
    },
  },
};
</script>