<template>
  <nav :class="{ scroll: isScroll }" class="nav" @scroll="handleScroll()">
    <ul v-scroll-spy-active v-scroll-spy-link>
      <li v-for="link in links" :key="link">
        <a>{{ $t(link) }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    links: [
      'Navbar.home',
      'Navbar.about',
      'Navbar.skills',
      'Navbar.portfolio',
      'Navbar.contact'
    ],
    isScroll: false,
    scrollPosition: 0
  }),
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      if (
        this.scrollPosition < window.pageYOffset &&
        window.pageYOffset > 250 &&
        document.documentElement.clientWidth > 565
      ) {
        this.isScroll = true;
      } else {
        this.isScroll = false;
      }
      this.scrollPosition = window.pageYOffset;
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/style.scss';

.nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 80px;
  width: 100%;
  z-index: 1;
  background-color: rgb(238, 238, 238);
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(122, 122, 122, 0.3);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  transition: 0.3s;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-evenly;

    li {
      cursor: pointer;
      padding: 15px;
    }
  }
}

.scroll {
  height: 55px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #fff;

  .active {
    background: rgb(224, 224, 224);
  }
}

@media (max-width: $screen-xs-max) {
  .nav {
    display: none;
  }
}
@media (min-width: $screen-sm) {
  .active {
    transition: all 0.5s;
    border-radius: 15px;
    border: 0;
    background: rgb(201, 201, 201);

    a {
      color: #070707;
      text-shadow: 0px 0px 6px rgba(154, 150, 150, 1);
    }
  }
}
</style>
