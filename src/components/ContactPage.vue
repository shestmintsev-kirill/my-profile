<template>
  <footer class="section-outer section-contact">
    <div class="section-contact-title">
      <span>{{ $t('ContactPage.title') }}</span>
    </div>
    <div class="section-contact-text">
      <span>{{ $t('ContactPage.description') }}</span>
      <a href="tel:+393249265673">+393249265673</a>
      <a href="mailto:k.shestmintsev@gmail.com">k.shestmintsev@gmail.com</a>
    </div>
    <div class="section-contact-btn">
      <button id="show-modal" class="animation" @click="showModal = true">
        {{ $t('ContactPage.btn') }}
      </button>
      <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">{{ $t('ContactPage.modalTitle') }}</h3>
      </Modal>
    </div>
    <div class="section-contact-sosial">
      <a
        v-for="item in sosial"
        :key="item.title"
        target="_blank"
        :href="item.link"
        ><img :src="getImage(`${item.icon}`)" alt="sosial" /></a>
    </div>
    <div class="section-contact-footer">
      <span>{{ $t('ContactPage.sosial') }}<br />
        <div>
          <a
            v-for="item in sosial"
            :key="item.link"
            target="_blank"
            :href="item.link"
            class="section-contact-footer-target"
          >
            {{ item.title }}
          </a>
        </div>
      </span>
    </div>
  </footer>
</template>

<script>
import Modal from '@/components/Modal';

export default {
  name: 'ContactPage',
  components: {
    Modal
  },
  data: () => ({
    showModal: false,
    sosial: {
      vk: {
        title: 'VK',
        link: 'https://vk.com/kir9i_l2',
        icon: 'vk.png'
      },
      instagram: {
        title: 'Instagram',
        link: 'https://www.instagram.com/kirilljora',
        icon: 'instagram.png'
      },
      github: {
        title: 'GitHub',
        link: 'https://github.com/shestmintsev-kirill',
        icon: 'github.png'
      },
      linkedin: {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/KShestmintsev/',
        icon: 'linkedin.png'
      }
    }
  }),
  methods: {
    getImage(img) {
      return require('@/assets/' + img);
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/scss/style.scss';

img {
  transition: 0.3s;
  &:hover {
    transform: scale(1.2);
  }
}
button {
  width: 200px;
  height: 40px;
  color: white;
  background: #070707;
  border-radius: 15px;
  transition: 0.3s;
  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: 0px 0px 6px rgb(41, 41, 41);
    transform: scale(1.1);
  }
}
.section-contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 110px;

  &-title {
    font-weight: bold;
    font-size: 35px;
    letter-spacing: 2px;
    margin-bottom: 20px;
  }

  &-text {
    text-align: center;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &-btn {
    margin-bottom: 60px;
    margin-top: 30px;
  }

  &-sosial {
    width: 20%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  &-footer {
    width: 100%;
    color: rgba(130, 130, 130, 1);
    text-align: center;
    margin-bottom: 70px;

    &-target + &-target {
      margin-left: 10px;
    }
  }

  @media (max-width: $screen-sm-max) {
    margin-top: 60px;

    &-text {
      width: 100%;
    }

    &-sosial {
      width: 50%;
    }
  }

  @media (min-width: $screen-md) {
    margin-top: 110px;

    &-text {
      width: 40%;
    }

    &-sosial {
      width: 20%;
    }
  }

  @media (min-width: $screen-lg) {
    &-text {
      width: 25%;
    }
  }
}
</style>
