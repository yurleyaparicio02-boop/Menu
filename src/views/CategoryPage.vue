<template>
  <div class="menu-page">
    <CategoryBanner :category="category" />

    <section class="menu-content content-width">
      <div class="section-heading">
        <div>
          <span class="dark-eyebrow">Nuestra carta</span>
          <h2>{{ category.title }}</h2>
        </div>
        <span class="product-count">{{ category.products.length }} productos</span>
      </div>

      <ProductCard v-for="product in category.products" :key="product.name" :product="product" />

      <section class="chef-card">
        <span class="chef-accent" />
        <div class="chef-image-wrap">
          <img :src="category.chef.image" :alt="category.chef.title" class="chef-image" />
        </div>
        <div class="q-card__section">
          <span class="chef-label">
            <span class="q-icon material-icons">restaurant</span>
            {{ category.chef.label }}
          </span>
          <h3>{{ category.chef.title }}</h3>
          <p>{{ category.chef.copy }}</p>
          <button class="q-btn q-btn--standard chef-action">{{ category.chef.action }}</button>
        </div>
      </section>
    </section>
  </div>
</template>

<script setup>
import CategoryBanner from '../components/CategoryBanner.vue'
import ProductCard from '../components/ProductCard.vue'
import { menuData } from '../data/menu.js'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const props = defineProps({
  categoryKey: {
    type: String,
    default: ''
  }
})

const category = computed(() => {
  const key = props.categoryKey || route.path.replace('/', '')
  return menuData.categories.find(item => item.key === key) || menuData.categories[0]
})
</script>
