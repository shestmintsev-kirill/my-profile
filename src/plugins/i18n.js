import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: 'en',
  fallbackLocale: 'ru',
  messages: {
    en: {
      HomePage: {
        name: 'Kirill{break}Shestmintsev',
        profession: 'Frontend developer{break}25 years old'
      },
      AboutPage: {
        title: 'About me',
        about:
          'Hi, I\'m Kirill – Frontend developer. I\'m interested in web development and everything connected with it.{break}{break}I finished courses on Udemy platform ',
        aboutNext: 'I am ready to implement projects with a cool team'
      },
      SkillsPage: {
        title: 'Skills',
        description: 'I work in such programs as'
      },
      PortfolioPage: {
        title: 'Portfolio',
        onlineStore:
          'Project - Online store using Firebase, Vuex, Vue-router and Vuetify',
        link: 'More...',
        movieApp:
          'Project - Movies Top 250 using Vue-router, Vuex and Bootstrap-vue',
        contactBook:
          'Project - Contact book using Vue-router, Vuex, LocalStorage',
        ashestmintseva: 'Personal site'
      },
      ContactPage: {
        title: 'Contacts',
        description: 'Want to know more or just chat? You are welcome!',
        btn: 'Send message',
        modalTitle: 'Write me',
        sosial: 'I\'m on social media'
      },
      Navbar: {
        home: 'Home',
        about: 'About me',
        skills: 'Skills',
        portfolio: 'Portfolio',
        contact: 'Contacts'
      },
      Modal: {
        name: 'Name',
        email: 'Email',
        tel: 'Tel',
        message: 'Message',
        send: 'Send',
        close: 'Close',
        alert: 'Thank you for contacting me'
      },
      PortfolioStore: {
        title: 'Online store using Firebase, Vuex, Vue-router and Vuetify'
      },
      PortfolioMovie: {
        title: 'Movies app using Vue-router, Vuex and Bootstrap-vue'
      },
      PortfolioContactBook: {
        title:
          'Contact book using Vue-router, Vuex, LocalStorage'
      },
      Portfolioashestmintseva: {
        title: 'Personal website, analytics, investments'
      }
    },
    ru: {
      HomePage: {
        name: 'Кирилл {break} Шестминцев',
        profession: 'Frontend разработчик{break}25 лет'
      },
      AboutPage: {
        title: 'Обо мне',
        about:
          'Привет, Я Кирилл – Frontend разработчик. Я интересуюсь Web-разработкой и всем, что с этим связано{break}{break}',
        aboutNext: 'Готов реализовывать проекты с крутой командой'
      },
      SkillsPage: {
        title: 'Навыки',
        description: 'Стек технологий'
      },
      PortfolioPage: {
        title: 'Портфолио',
        onlineStore:
          'Онлайн магазин с использованием Firebase, Vuex, Vue-router и Vuetify',
        link: 'Подробнее...',
        movieApp:
          'Топ 250 фильмов с использованием Vue-router, Vuex и Bootstrap-vue',
        contactBook:
          'Контактная книга с использованием Vue-router, Vuex, LocalStorage',
        ashestmintseva: 'Личный сайт'
      },
      ContactPage: {
        title: 'Контакты',
        description: 'Свяжитесь со мной любым удобным для Вас способом',
        btn: 'Отправить сообщение',
        modalTitle: 'Напишите мне',
        sosial: 'Я в социальных сетях'
      },
      Navbar: {
        home: 'Главная',
        about: 'Обо мне',
        skills: 'Навыки',
        portfolio: 'Портфолио',
        contact: 'Контакты'
      },
      Modal: {
        name: 'Имя',
        email: 'Эл. почта',
        tel: 'Номер телефона',
        message: 'Сообщение',
        send: 'Отправить',
        close: 'Закрыть',
        alert: 'Спасибо что связались со мной'
      },
      PortfolioStore: {
        title:
          'Онлайн магазин с использованием Firebase, Vuex, Vue-router и Vuetify'
      },
      PortfolioMovie: {
        title:
          'Топ 250 фильмов с использованием Vue-router, Vuex и Bootstrap-vue'
      },
      PortfolioContactBook: {
        title:
          'Контактная книга с использованием Vue-router, Vuex, LocalStorage'
      },
      Portfolioashestmintseva: {
        title: 'Личный сайт, аналитика, инвестиции'
      }
    }
  }
});
