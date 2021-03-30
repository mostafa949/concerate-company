<template>
  <div class="row" :class="[activeMenu ? 'show-menu' : 'main-menu']">
    <div class="col-md-6 menu-left"></div>
    <div class="col-md-6 menu-right">
      <div class="menu-side">
        <p>Menu</p>
        <ul class="list-unstyled">
          <li v-for="(item, index) in menu" :key="index">
            <router-link class="link link--arrowed" :to="item.route">
              {{ item.name }}
              <svg
                class="arrow-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <g
                  fill="none"
                  :stroke="arrowColor"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                >
                  <circle
                    class="arrow-icon--circle"
                    cx="16"
                    cy="16"
                    r="15.12"
                  ></circle>
                  <path
                    class="arrow-icon--arrow"
                    d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
                  ></path>
                </g>
              </svg>
            </router-link>
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
  computed: {
    activeMenu() {
      return this.$store.getters.activeMenu;
    },
    arrowColor() {
      return this.$store.getters.arrowColor;
    },
  },
};
</script>

<style lang="scss" scoped>
$white: #ffffff;
$black: #000000;
$whitesmoke: #f5f5f5;
$link-blue: #1e1e1e;

/* Global style (Scoped) */
@mixin menu($left, $bgc /* => background-color */, $bgc2: $bgc) {
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 1;
  top: 0;
  left: $left;
  transition: all 0.3s, background-color 1s;
  background-color: $bgc;
  background-color: $bgc2;
}

@mixin menu-right {
  background-color: #fff;
  div.menu-side {
    position: absolute;
    top: 40px;
    left: 45px;
    p {
      text-align: left;
      margin-bottom: 60px;
    }
    ul {
      text-align: left;
      li {
        margin-bottom: 10px;
        cursor: pointer;
        .link {
          color: $link-blue;
          cursor: pointer;
          font-weight: 550;
          text-decoration: none;
          text-transform: capitalize;
        }

        .link--arrowed {
          display: inline-block;
          height: 2rem;
          line-height: 2rem;

          .arrow-icon {
            position: relative;
            top: -1px;
            -webkit-transition: -webkit-transform 0.3s ease;
            transition: -webkit-transform 0.3s ease;
            transition: transform 0.3s ease;
            transition: transform 0.3s ease, -webkit-transform 0.3s ease;
            vertical-align: middle;
          }

          .arrow-icon--circle {
            transition: stroke-dashoffset 0.3s ease;
            stroke-dasharray: 95;
            stroke-dashoffset: 95;
          }

          &:hover {
            .arrow-icon {
              transform: translate3d(5px, 0, 0);
            }

            .arrow-icon--circle {
              stroke-dashoffset: 0;
            }
          }
        }
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* end of Global style (Scoped) */

div.main-menu {
  @include menu(100%, rgba(255, 255, 255, 0));
  div.menu-left {
    background-color: #fff;
    opacity: 0.3;
  }
  div.menu-right {
    @include menu-right();
  }
}

/* show menu class */
div.show-menu {
  @include menu(0, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.85));
  div.menu-left {
    background-color: #fff;
    opacity: 0.7;
  }
  div.menu-right {
    @include menu-right();
  }
}
/* end of show menu class */
</style>
