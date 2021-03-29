<template>
  <div class="main-menu row" :class="[activeMenu ? 'd-flex' : 'd-none']">
    <div class="col-md-6 menu-left"></div>
    <div class="col-md-6 menu-right">
      <h3>Menu</h3>
      <ul class="list-unstyled">
        <li v-for="(item, index) in menu" :key="index">
          <router-link class="text-decoration-none" :to="item.route"
            >{{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "mainMenu",
  data() {
    return {
      menu: [
        { name: "home", route: "/" },
        { name: "about", route: "/about" },
        { name: "services", route: "/services" },
        { name: "contact", route: "/contact" },
      ],
    };
  },
  computed: {
    activeMenu() {
      return this.$store.getters.activeMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
/* Global style (Scoped) */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* end of Global style (Scoped) */

div.main-menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  transition: all 0.5s ease-in-out;

  div.menu-left {
    background-color: rgb(124, 8, 8);
    opacity: 0.4;
  }
  div.menu-right {
    background-color: #fff;
  }
}
</style>
