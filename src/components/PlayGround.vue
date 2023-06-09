
<template>
    <div>
    <h1>{{ msg }}</h1>
    <p>Count: {{ count }}</p>
    <button v-on:click.once="increment()">Increment</button>
    <button v-on:click="greet('yoyo')">Greet</button>
    <div>
      <a v-bind:href="website">My Website</a></div>
      <p v-html="websiteLink"></p>
      <input type="text" v-bind:value="msg">
      <p v-on:mouseover="updateXY">Mouse:{{ X }} , {{ Y }}</p>
  
    <div>
      <!-- V-model will directly map the input to the model -->
      <input type="text" v-model="VMODEL">
      <p>Implenting V-Model: {{ VMODEL }}</p>
    </div>
  
    <div>
      <button v-on:click="A++">Add To A+</button>
      <button v-on:click="B++">Add To B+</button>
      <p>A +: {{ addToA }}</p>
      <p>B -: {{ addToB }}</p>
  
    </div>
    <!-- v-bind:class = " Key: Value" -->
  
    <div v-on:click="available = !available" v-bind:class="{available: available}">
      <span>Ryuaasd</span>
    </div>
  
    <div>
      <button v-on:click="error = !error">Toggle Error</button>
      <button v-on:click="success = !success">Toggle Success</button>
      <!-- v-if will wipe out the whole <p> attribute if error=false -->
      <p v-if="error">There is an error</p>
      <p v-else-if="success">Success</p>
    </div>
  
    <div>
      <ul>
        <li v-for="i in arr" :key="i">{{ i }}</li>
      </ul>
      <ul>
        <li v-for="ninja,index in ninjas" :key="ninja.name">{{index+1}}. {{ ninja.name }} - {{ ninja.age }}</li>
      </ul>
      <ul v-for="ninja in ninjas" :key="ninja.name">
        <li v-for="(value, key) in ninja" :key="key">
          {{ key }} - {{ value }}
        </li>
      </ul>
    </div>
  
    <!-- <div >
    <button-counter counter=69 ></button-counter>
    </div> -->
  
    <div>
      <!-- The refs can transfer information about the whole element to another component -->
      <input type="text" ref = "input">
      <button v-on:click="readRefs">Log Refs</button>
    </div>
  
  
    </div>
  </template> 
  
  
  <script>
  
  export default {
    name: 'playGround',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        count: 0,
        name: 'Ajar Sarmad',
        website: 'https://ajar.sarmad.dev',
        websiteLink: '<a href="https://ajar.sarmad.dev">My Website</a>',
        X: 0,
        Y: 0,
        VMODEL: '',
        A: 0,
        B: 0,
        available: false,
        nearby: false,
        error: false,
        success: false,
        arr: ['Mario', 'Luigi', 'Yoshi', 'Bowser'],
        ninjas: [
          { name: 'Ryu', age: 25 },
          { name: 'Yoshi', age: 35 },
          { name: 'Ken', age: 55 }
        ]
  
      }
    },
    // components: {
      // Name then FileName
    //   'buttonCounter' : ButtonCounter
    // },
  
  // Computed properties are cached based on their dependencies.
  // They only run when the data they depend on changes
    computed: {
      addToA(){
        console.log("addToA");
        return this.count + this.A;
      },
      addToB(){
        console.log("addToB");
        return this.count - this.B;
      }
    },
    methods: {
      readRefs(){
        // ref -> nameofit -> attribute you want to access
        console.log(this.$refs.input.value);
      },
        increment() {
          this.count++
        },
        greet(anything) {
          alert('Hello ' + this.name + '!' + anything)
        },
        updateXY(event) {
          console.log(event);
          this.X = event.offsetX
          this.Y = event.offsetY
        },
  
    }
  }
  </script>
  
  <!-- Style scoped will apply CSS only on the respective component -->
  <style scoped>
  button {
    font-weight: bold;
  }
  span {
    background: red;
    display: inline-block;
    padding: 10px;
    /* print-color-adjust: exact; */
    color: #fff;
    margin: 10px 0;
    color: red;
  }
  .available span{
    color: green;
  }
  .nearby {
    color: orange;
  }
  
  
  </style>