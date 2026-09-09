<template>
  <article class="product-card">
    <div class="product-image">
      <img :src="product.image" :alt="product.name" class="product-photo" />
      <span class="q-chip product-tag" v-if="product.tag">{{ product.tag }}</span>
    </div>
    <div class="product-body">
      <div class="product-title-row">
        <h3>{{ product.name }}</h3>
        <strong>{{ formatPrice(product.price) }}</strong>
      </div>
      <p>{{ product.description }}</p>
      <button class="q-btn q-btn--standard order-btn">Ordenar</button>
    </div>
  </article>
</template>

<script setup>
const props = defineProps({
  product: { type: Object, required: true }
})

const formatPrice = (price) => {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price)
}
</script>
