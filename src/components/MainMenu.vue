<template>
  <div class="main-menu" :class="[activeMenu ? 'd-none' : 'd-block']">
    <div class="row">
      <div class="col-md-6 menu-left"></div>
      <div class="col-md-6 menu-right">
        <h3>Menu</h3>
        <ul class="list-unstyled">
          <li v-for="(item, index) in menu" :key="index">
            <router-link class="text-decoration-none" :to="item.route">{{
              item.name
            }}</router-link>
          </li>
        </ul>
      </div>
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
};
</script>

<style lang="scss" scoped>
div.main-menu {
  position: fixed;
  z-index: 1;
  width: 100%;
  height: 100%;
  div.menu-left {
    background-color: red;
  }
  div.menu-right {
    background-color: #fff;
  }
}
</style>