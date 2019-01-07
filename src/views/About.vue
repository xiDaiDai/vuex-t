<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ info.firstName || 'N' }}</div>
    <div>{{ info.lastName || 'N' }}</div>
    <div>{{ info.gender || 'N' }}</div>
    <div>{{ info.location || 'N' }}</div>
    <div>{{ 5|percent }}</div>
    <div @click = 'changeInfo'>修改信息</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
// @ is an alias to /src
export default {
  name: 'about',
  data () {
    return {
    }
  },
  components: {
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
    changeInfo () {
      this.$store.dispatch('home/changeInfo', { firstName: '22222', lastName: '333' })
    }
  },
  created () {
    console.log('----- create ------')
  },
  mounted () {
    console.log('----- mounted ------')
  },
  updated () {
    console.log('----- updated ------')
  },
  destroyed () {
    console.log('----- destroyed ------')
  }
}
</script>
