<template>
  <div class="header">
    <ul class="d-flex header-top list-unstyled">
      <li>
        <b>featured project:</b>
        <p>{{ headerTop.featuredProject }}</p>
        <span class="dash"></span>
      </li>
      <li>
        <b>location:</b>
        <p>{{ headerTop.location }}</p>
        <span class="dash"></span>
      </li>
    </ul>
    <div class="header-content" data-aos="fade-up">
      <h3>{{ headerContent.content }}</h3>
    </div>
    <div class="slider">
      <ul class="d-flex list-unstyled">
        <li
          @click="getLeftHeaderContent"
          :class="[headerContent.active ? 'bg-white' : 'slider-disactive']"
        >
          {{ getHeaderContent.left.title }}
          <span>Play <font-awesome-icon :icon="['fas', 'play']" /></span>
        </li>
        <li @click="getRightHeaderContent" class="">
          {{ getHeaderContent.right.title }}
          <span>Play <font-awesome-icon :icon="['fas', 'arrow-up']" /></span>
        </li>
      </ul>
    </div>
    <img src="../../assets/header1.jpg" alt="" />
  </div>
</template>

<script>
export default {
  name: "homeHeader",
  data() {
    return {
      headerContent: {
        content: "",
        play: null,
        img: "",
        active: null,
      },
    };
  },
  computed: {
    headerTop() {
      return this.$store.getters.headerTop;
    },
    getHeaderContent() {
      return this.$store.getters.headerContent;
    },
  },
  methods: {
    defaultHeaderContent() {
      this.headerContent.content = this.getHeaderContent.left.content;
      this.headerContent.play = this.getHeaderContent.left.play;
      this.headerContent.img = this.getHeaderContent.left.img;
      this.headerContent.active = this.getHeaderContent.left.active;
    },
    getLeftHeaderContent() {
      if (!this.getHeaderContent.left.active) {
        this.defaultHeaderContent();
      } else {
        this.headerContent.active = false;
      }
    },
    getRightHeaderContent() {
      this.headerContent.content = this.getHeaderContent.right.content;
      this.headerContent.play = this.getHeaderContent.right.play;
      this.headerContent.img = this.getHeaderContent.right.img;
      this.headerContent.active = this.getHeaderContent.right.active;
    },
  },
  created() {
    this.defaultHeaderContent();
  },
};
</script>

<style lang="scss" scoped>
/* General style */
.slider-disactive {
  background-color: rgba(255, 255, 255, 0.75);
}
/* end of General style */
div.header {
  position: relative;
  // cursor: url("../../assets/arrow-down_32x32.png"), auto;
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
        margin-bottom: 0;
      }
      span.dash {
        width: 30px;
        height: 2px;
        background-color: #f7f7f7;
        display: inline-block;
      }
    }
  }

  div.header-content {
    position: absolute;
    top: 30%;
    h3 {
      text-align: left;
      transition: all 1s;
      position: absolute;
      top: 50%;
      width: 600px;
      color: #fff;
      left: 40px;
      line-height: 54px;
      -webkit-transform: translate(0, -5%);
      -moz-transform: translate(0, -5%);
      -ms-transform: translate(0, -5%);
      -o-transform: translate(0, -5%);
      transform: translate(0, -5%);
      font-size: 54px;
    }
  }

  div.slider {
    position: absolute;
    bottom: 0;
    width: 100%;
    cursor: pointer;
    ul {
      margin: 0;
      li {
        float: left;
        text-align: left;
        width: 50%;
        height: 84px;
        padding: 31px 37px;
        font-family: replicaprobold;
        border-top: 2px solid #aaa;
        position: relative;
        color: #7e7b7b;
        transition: all 0.3s;
        background-color: rgba(255, 255, 255, 0.75);
        &:first-child {
          margin-right: 0.2%;
        }
        span {
          float: right;
        }
      }
    }
  }

  img {
    width: 100%;
    height: 661px;
  }
}
</style>
