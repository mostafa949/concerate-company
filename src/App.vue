<template>
  <div id="app">
    <main-menu />
    <div class="row">
      <div class="col-md-11">
        <router-view />
      </div>
      <div class="col-md-1 upper-sidebar">
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
  // height: 1200px;
  div.row {
    margin-right: 0;
    div.upper-sidebar {
      position: absolute;
      right: 27px;
      z-index: 5;
      padding: 0 !important;
    }
  }
}
</style>
