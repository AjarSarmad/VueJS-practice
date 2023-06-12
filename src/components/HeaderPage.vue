<template>
    <div>
        <header>
        <h1 v-on:click="changeTitle">{{ titleValue }}</h1>
        </header>
    </div>

</template>

<script>
import { bus } from '../App.vue';
export default {
    name: 'HeaderPage',
    data() {
        return {
            titleValue: this.title,
        }
    },
    props:{
        title:{
            type: String,
            required: true
        }
    },
    methods:{
        changeTitle(){
            // this.titleValue = 'Welcome to Vue'

            //this.$emit(EventName , data)
            // this.$emit('ChangeTitle', 'Welcome to Vue Wizards');
            this.titleValue = 'Welcome to Vue Wizards';
            bus.$emit('ChangeTitle', 'Welcome to Vue Wizards')
        }
    },
    

}
</script>

<style scoped>
header {
    background: darkblue;
    padding: 20px;
    /* border: 100cap; */
    /* margin: 100px; */
}
h1 {
    color: whitesmoke;
    text-align: center;
}
</style>