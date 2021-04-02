<template>
  <div class="home">
    <home-header class="padding-botton" />
    <section-about />
  </div>
</template>

<script>
import HomeHeader from "../components/home/HomeHeader";
import SectionAbout from "../components/home/About";
export default {
  name: "Home",
  components: { HomeHeader, SectionAbout },
};
</script>