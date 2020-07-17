<template>
  <div id="app">
    <router-view/>
    <glslEditor/>
  </div>
</template>

<script>
import glslEditor from '@/components/glslEditor'

export default {
  name: 'App',
  components: {
    glslEditor
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
