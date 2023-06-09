<template>
  <div>
    <button v-on:click="increment()">You clicked me {{ counterValue }} times.</button>
    <ul v-for="ninja in arr" :key="ninja.name">
        <li v-for="(value, key) in ninja" :key="key">
          {{ key }} - {{ value }}
        </li>
     </ul>   
  </div>
</template>

<script>
export default {
  name: 'buttonCounter',
  // props are used to pass data from parent to child
  // we can pass Array, Object, String, Number, Boolean
  // for passing array use v-bind:arr="arr"
  // in refrence type prop like array the change will effect both parent and child
  props:{
    counter: Number,
    arr: Array
  },
  data(){
    return{
      counterValue : this.counter
    }
  },
  methods:{
    increment(){
      this.counterValue++
    }
  }
}
</script>