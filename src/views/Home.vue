<template>
  <div>
    HOME
    <br />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    handleGoToLogin() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped></style>
