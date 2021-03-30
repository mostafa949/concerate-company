<template>
  <div id="app">
    <main-menu />
    <div class="row">
      <div class="col-md-10">
        <h3>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque,
          voluptates! Pariatur non dolorum qui aliquid dolorem cum ea, vitae vel
          sit molestiae esse expedita mollitia aspernatur quis delectus quod
          doloribus.
        </h3>
        <router-view />
      </div>
      <div class="col-md-2 upper-sidebar">
        <side-bar />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import MainMenu from "./components/MainMenu.vue";

export default {
  name: "App",
  components: { SideBar, MainMenu },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 1200px;
  div.row {
    margin-right: 0;
    div.upper-sidebar {
      z-index: 5;
    }
  }
}
</style>
