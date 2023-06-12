<template>
  <div id="app">
    <HeaderPage v-bind:title="title" v-on:ChangeTitle="updateTitle($event)"></HeaderPage>
  <buttonCounter v-bind:counter=counter v-bind:arr="ninjas"></buttonCounter>
  <playGround></playGround>
  <div>
    <FormTempelate>
      <div slot="form-header">
        <h3>Form Header</h3>
      </div>
      <div slot="form-body">
        <input type="text" placeholder="Enter your name">
        <input type="text" placeholder="Enter your email">
      </div>
      <div slot="form-footer">
        <button >Submit</button>
      </div>
    </FormTempelate>
    <!-- 
      // keep-alive is used to keep the state of the component when we switch between the components
      <keep-alive>
      //component is used to render the component based on descision of v-bind:is => name of the component
        <component v-bind:is="currentTabComponent"></component>
      </keep-alive>
      <button v-on:click="currentTabComponent = 'Form1'">Home</button>
      <button v-on:click="currentTabComponent = 'Form2'">Posts</button>
     -->
  </div>
  <FooterPage v-bind:title="title"></FooterPage>
  </div>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue'
import FooterPage from './components/FooterPage.vue';
import  Vue from 'vue';
import FormTempelate from './components/FormTempelate.vue';
export const bus = new Vue();
export default{
  name: 'App',
  data () {
    return {
      counter: 0,
      ninjas: [
        { name: 'Ryu', age: 25 },
        { name: 'Yoshi', age: 35 },
        { name: 'Ken', age: 55 }
      ],
      title: 'Ajar here',
    }
  },
  components:{
    HeaderPage,
    FooterPage,
    FormTempelate
  },
  methods:{
    updateTitle(updatedTitle){
      this.title = updatedTitle
    }
  },


  //LifecycleHooks
  // beforeCreate(){
  //   alert('beforeCreate()')
  // },

  //Mounted or Created are mostly used
  //for fetching data from server
 
 /* created(){
    alert('created()')
  },
  beforeMount(){
    alert('beforeMount()')
  },
  mounted(){
    alert('mounted()')
  },
  beforeUpdate(){
    alert('beforeUpdate()')
  },
  updated(){
    alert('updated()')
  },
  beforeDestroy(){
    alert('beforeDestroy()')
  },
  destroyed(){
    alert('destroyed()')
  }*/


}
</script>
