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
        <div class="header-socials" aria-label="Redes sociales">
          <button class="header-order q-btn q-btn--standard" type="button">
            Revisar orden
          </button>
          <a class="social-link" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
            <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm5.25-3.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" /></svg>
          </a>
          <a class="social-link" :href="whatsappLink" target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp" title="WhatsApp">
            <svg class="social-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2a9.83 9.83 0 0 0-8.5 14.77L2 22l5.38-1.49A9.96 9.96 0 1 0 12.04 2Zm0 17.92a8.08 8.08 0 0 1-4.12-1.13l-.3-.18-3.19.88.9-3.1-.2-.32A8.04 8.04 0 1 1 12.04 19.92Zm4.42-6.03c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06a6.58 6.58 0 0 1-1.94-1.2 7.28 7.28 0 0 1-1.35-1.68c-.14-.24 0-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.5.58.18 1.1.15 1.52.09.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" /></svg>
          </a>
        </div>
      </div>

      <nav class="options-banner" aria-label="Categorías del menú">
        <div class="content-width options-banner-content">
          <router-link v-for="item in navItems" :key="item.path" class="option-link" :to="item.path">
            {{ item.label }}
          </router-link>
        </div>
      </nav>

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
import { menuData } from './data/menu.js'

const drawer = ref(false)
const sidebarOpen = ref(false)
const brandRoute = '/hamburguesas'
const whatsappLink = `https://wa.me/${menuData.about.whatsapp.replace(/\D/g, '')}`

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
