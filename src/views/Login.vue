<template>
  <div>
    <br />
    <button @click="handleGoToHome">login</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    handleGoToHome() {
      this.$router.push({
        path: "Home",
      });
    },
  },
};
</script>

<style scoped></style>
