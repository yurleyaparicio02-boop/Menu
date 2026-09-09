<template>
  <section class="category-hero" :style="{ backgroundImage: 'url(' + category.bannerImage + ')' }">
    <div class="hero-shade" />
    <div class="hero-content content-width">
      <span class="eyebrow">{{ category.eyebrow }}</span>
      <h1>{{ category.title }}</h1>
      <p>{{ category.description }}</p>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  category: { type: Object, required: true }
})
</script>
