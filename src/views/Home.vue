<template>
  <div class="home">
    <div>{{info.firstName || 'N'}}</div>
    <div>{{info.lastName || 'N'}}</div>
    <div>{{info.gender || 'N'}}</div>
    <div>{{info.location || 'N'}}</div>
    <div @click='requestInfo'>获取信息</div>

    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  data () {
    return {}
  },
  components: {
    HelloWorld
  },
  computed: {
    ...mapState({
      info: state => state.home.info
    }),
    ...mapGetters('home', {
      fullName: 'fullName'
    })
  },
  methods: {
    requestInfo () {
      this.$store.dispatch('home/getInfo')
    }
  },
  created () {
  }
}
</script>
