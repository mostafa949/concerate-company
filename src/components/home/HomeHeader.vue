<template>
  <div class="header">
    <div class="d-flex header-top">
      <div class="featured-project">
        <h2>featured project</h2>
        <h2>{{ header.featuredProject }}</h2>
      </div>
      <div class="location">
        <h2>location</h2>
        <h2>{{ header.location }}</h2>
      </div>
    </div>
    <img src="@/assets/header1.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: "homeHeader",
  computed: {
    header() {
      return this.$store.getters.header;
    },
  },
};
</script>

<style lang="scss" scoped>
div.header {
  div.header-top {
    position: absolute;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
</style>