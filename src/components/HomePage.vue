<template>
  <header class="section-outer section-header">
    <MobilNavbar v-if="navigation" @back="closeNav" @unvisible="closeNav" />
    <Navbar />
    <div class="section-header-name">
      <div class="section-header-name-me">
        <div class="name">
          <h1>
            <i18n path="HomePage.name"><br slot="break" /></i18n>
          </h1>
        </div>
        <div class="icon" @click="navClick">
          <img class="image-icon" src="@/assets/menu.png" alt="menu" />
        </div>
        <div class="profession">
          <i18n path="HomePage.profession"><br slot="break" /></i18n>
        </div>
        <div class="lang">
          <a href="/" @click.prevent="setLocale('ru')">RU</a> |
          <a href="/" @click.prevent="setLocale('en')">ENG</a>
        </div>
      </div>
      <div class="section-header-name-photo">
        <img src="@/assets/photom.jpg" alt="my-image" />
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import MobilNavbar from '@/components/MobilNavbar.vue';

export default {
  name: 'HomePage',
  components: {
    Navbar,
    MobilNavbar
  },
  data: () => ({
    navigation: false
  }),

  methods: {
    navClick() {
      this.navigation = true;
    },
    closeNav() {
      this.navigation = false;
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
      localStorage.lang = JSON.stringify(locale);
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/style.scss';
* {
  position: relative;
}
h1 {
  font-size: 1em;
}

.image-icon {
  border-radius: 20px;
  border: 0;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  padding: 10px;
  background-color: rgba(173, 173, 173, 0.6);
}

.icon {
  position: fixed;
  padding-right: 10px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
  cursor: pointer;
  right: 20px;
  z-index: 10;
}

.section-header {
  max-width: 945px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;

  &-name {
    &-me {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 0;

      .name {
        font-size: 45px;
        font-weight: bold;
        letter-spacing: 1.1px;
        margin-bottom: 20px;
      }

      .profession {
        font-size: 18px;
      }

      .lang {
        transform: rotate(-90deg);
      }
    }

    &-photo {
      img {
        width: 100%;
        border-radius: 10px;
      }
    }
  }
  @media (max-width: $screen-sm-max) {
    .profession {
      font-size: 15px;
    }
    .name {
      font-size: 30px;
      font-weight: bold;
      letter-spacing: 1.1px;
    }
  }

  @media (max-width: $screen-xs-max) {
    &-name {
      &-me {
        flex-direction: column;
        align-items: flex-start;
        .lang {
          display: none;
        }
      }

      &-photo {
        margin-bottom: 50px;
      }
    }
  }

  @media (min-width: $screen-sm) {
    padding-top: 90px;
    &-name {
      &-me {
        .icon {
          display: none;
        }
      }

      &-photo {
        margin-bottom: 100px;
      }
    }
  }
}
</style>
