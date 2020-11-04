<template>
  <div id="app">
    {{ name }}
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      name: ''
    }
  },
  mounted() {
    const url = '/data.json'
    axios.get(url).then(res => {
      this.name = res.data.name
    })
  }
}
</script>
<style></style>
