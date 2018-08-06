<template>
  <div id="app">
      <app-nav v-if="this.$route.path !== '/login'"></app-nav>
      <router-view></router-view>
  </div>
</template>

<script>
import AppNav from '@/views/app/app-nav.vue'

export default {
  name: 'app',
  components: {
      AppNav
  },
}
</script>

<style>
  html {
    background: #f4f5f7;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  article, aside, blockquote, body, button, dd, details, div, dl, dt, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, hr, input, legend, li, menu, nav, ol, p, section, td, textarea, th, ul {
    margin: 0;
    padding: 0;
  }


  html, body, div, span, h1, h2, h3, h4, h5, h6, p, a, em, img, input, q, b, dl, dt, dd, ol, ul, li, form, label, canvas {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  #app {
    background-color: #f4f5f7;
  }
</style>
