<template>
  <div class="sidebar">
    <router-link to="/"
      ><img src="../assets/main-logo.png" alt="Logo"
    /></router-link>
    <div class="spans">
      <div class="span-container" @click="test">
        <span :class="[activeSpan ? 'active-span-left' : 'span']"></span>
        <span :class="[disActiveSpan ? 'disactive-span' : 'span']"></span>
        <span :class="[activeSpan ? 'active-span-right' : 'span']"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      activeSpan: false,
      disActiveSpan: false,
    };
  },
  methods: {
    test() {
      //   if (this.activeSpan) {
      this.activeSpan = !this.activeSpan;
      this.disActiveSpan = !this.disActiveSpan;
      //   } else {
      //     this.activeSpan = true;
      //     this.disActiveSpan = true;
      //   }
    },
  },
};
</script>

<style lang="scss" scoped>
/* Global style (mixin) */
@mixin hover-opacity-effect {
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.6;
  }
}
@mixin default-span {
  position: relative;
  display: inline-block;
  background-color: black;
  width: 3px;
  height: 48px;
  margin: 0 3px;
  @include hover-opacity-effect;
}

@mixin first($num) {
  @if $num == 1 {
    &:first-child {
      @content;
    }
  } @else {
    &:nth-child(#{$num}) {
      @content;
    }
  }
}

/* end of Global style (mixin) */
div.sidebar {
  position: fixed;
  z-index: 5;
  a {
    display: inline-block;
    // margin: 0 auto;
    width: 150px !important;
    height: 150px !important;
    img {
      @include hover-opacity-effect;
      max-height: 150px;
      width: 100%;
      height: 100%;
    }
  }

  div.spans {
    position: absolute;
    top: 300px;
    width: 100%;
    div.span-container {
      @include hover-opacity-effect;
      width: 30px;
      margin: 0 auto;
      cursor: pointer;
      span.span {
        position: relative;
        display: inline-block;
        background-color: black;
        width: 3px;
        height: 48px;
        margin: 0 3px;
        transition: all 0.5s ease-in-out;
      }
      span.active-span-left {
        @include default-span;
        left: 5px;
        transform: rotate(45deg);
        transition: all 0.3s ease-in-out;
      }
      span.active-span-right {
        @include default-span;
        right: 5px;
        transform: rotate(-45deg);
        transition: all 0.3s ease-in-out;
      }
      span.disactive-span {
        position: absolute;
        background: transparent;
      }
    }
  }
}
</style>
