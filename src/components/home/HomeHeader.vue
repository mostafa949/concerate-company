<template>
  <div class="header">
    <ul class="d-flex header-top list-unstyled">
      <li>
        <b>featured project:</b>
        <p>{{ header.featuredProject }}</p>
        <span class="dash"></span>
      </li>
      <li>
        <b>location:</b>
        <p>{{ header.location }}</p>
        <span class="dash"></span>
      </li>
    </ul>
    <div class="header-content">
      <h3>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores,
        velit.
      </h3>
    </div>
    <div class="slider row">
      <div class="col-md-6">test one</div>
      <div class="col-md-6">test two</div>
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
  ul.header-top {
    position: absolute;
    padding: 35px;
    li {
      text-align: left;
      margin-right: 55px;
      color: #f7f7f7;
      b {
        font-size: 13px;
        text-transform: uppercase;
      }
      p {
        font-weight: bold;
        font-size: 14px;
      }
      span.dash {
        width: 30px;
        height: 2px;
        background-color: #f7f7f7;
        display: inline-block;
      }
    }
  }
  div.slider {
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: #fff;
  }
  div.header-content {
    position: absolute;
  }
  img {
    width: 100%;
    height: 661px;
  }
}
</style>
