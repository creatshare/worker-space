<template>
  <div id="app">
    <el-container>
      <el-header>
        <app-nav></app-nav>
      </el-header>

      <el-container>
        <router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AppNav from '@/views/app/app-nav.vue'

export default {
  name: 'app',
  components: {
      AppNav
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #app {
    background-color: #f4f5f7;
    height: 100vh;
  }
</style>
