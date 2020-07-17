import Vue from 'vue'
import Router from 'vue-router'
import glslEditor from '@/components/glslEditor'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'glslEditor',
      component: glslEditor
    }
  ]
})
