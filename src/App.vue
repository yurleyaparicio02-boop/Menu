<template>
  <div class="app-shell">
    <header class="site-header">
      <div class="content-width toolbar-content">
        <div class="header-brand-area">
          <button class="mobile-menu q-btn q-btn--flat" @click="toggleSidebar">
            <span class="material-icons">menu</span>
          </button>

          <router-link :to="brandRoute" class="brand">
            <span class="brand-mark">G</span>
            <span>Gastrobar <span class="brand-dot">El Fogón</span></span>
          </router-link>
        </div>
      </div>

    </header>
    <aside class="mobile-drawer" v-if="drawer">
      <div class="drawer-brand">
        <span class="brand-mark small">G</span>
        <span>Gastrobar <span class="brand-dot">El Fogón</span></span>
      </div>
      <div class="drawer-links">
        <router-link v-for="item in navItems" :key="item.path" class="drawer-link" :to="item.path" @click="drawer = false">
          {{ item.label }}
        </router-link>
      </div>
    </aside>

    <div class="app-layout">
      <aside class="left-sidebar" v-if="sidebarOpen">
        <div class="sidebar-brand">
          <span class="brand-mark small">G</span>
          <span>Gastrobar <span class="brand-dot">El Fogón</span></span>
        </div>

        <nav class="sidebar-nav">
          <router-link v-for="item in navItems" :key="item.path" class="sidebar-link" :to="item.path" @click="sidebarOpen = false">
            <span class="sidebar-link-icon">✦</span>
            <span>{{ item.label }}</span>
          </router-link>
        </nav>
      </aside>

      <main class="main-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(false)
const sidebarOpen = ref(false)
const brandRoute = '/hamburguesas'

const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

const navItems = [
  { label: 'Hamburguesas', path: '/hamburguesas' },
  { label: 'Perros', path: '/perros' },
  { label: 'Pizzas', path: '/pizzas' },
  { label: 'Bebidas', path: '/bebidas' },
  { label: 'Postres', path: '/postres' },
  { label: 'Promociones', path: '/promociones' },
  { label: 'Nosotros', path: '/nosotros' }
]
</script>
