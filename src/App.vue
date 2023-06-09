<template>
  <div id="app">
    <HeaderPage></HeaderPage>
  <buttonCounter counter=69 v-bind:arr="ninjas"></buttonCounter>
  <playGround></playGround>
  <FooterPage></FooterPage>
  </div>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue'
import FooterPage from './components/FooterPage.vue';
export default{
  name: 'App',
  data () {
    return {
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
    FooterPage
  }
}
</script>
