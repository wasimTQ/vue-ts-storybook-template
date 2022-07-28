import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
  },
]

export { routes }

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
