<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: ''
    };
  },
  mounted() {
    this.axios.get('/user/login').then(res => {
      this.data = res;
    });
  }
};
</script>
<style></style>
