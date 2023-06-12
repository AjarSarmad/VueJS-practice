<template>
    <div>
        <footer>
        <h1>{{ copyrights }}</h1>
        <h2>{{ titleValue }}</h2>
        </footer>
    </div>

</template>

<script>
import { bus } from '../App.vue';

export default {
    name: 'HeaderPage',
    data() {
        return {
            copyrights: 'CopyRight 2023 - Vue by Ajar Sarmad',
            titleValue: this.title,
        }
    },
    props:{
        title:{
            type: String,
            required: true
        }
    },
    created(){
        bus.$on('ChangeTitle', (data) =>{
            this.titleValue = data;
        })
    }
}
</script>

<style scoped>
footer {
    background: grey;
    padding: 5px;
    /* border: 100cap; */
    /* margin: 100px; */
}
h1 {
    color: greenyellow;
    text-align: center;
}
</style>