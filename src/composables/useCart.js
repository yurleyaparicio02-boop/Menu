import { computed, ref } from 'vue'

export function useCart() {
  const cart = ref([])

  const totalCount = computed(() =>
    cart.value.reduce((sum, item) => sum + Number(item.quantity || 0), 0)
  )

  const totalPrice = computed(() =>
    cart.value.reduce((sum, item) => sum + Number(item.priceRaw || 0) * Number(item.quantity || 0), 0)
  )

  const formatCOP = (value) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(Number(value || 0))
  }

  const updateQuantity = (index, delta) => {
    if (index < 0 || index >= cart.value.length) return

    const item = cart.value[index]
    const nextQuantity = Number(item.quantity || 0) + delta

    if (nextQuantity <= 0) {
      cart.value.splice(index, 1)
      return
    }

    item.quantity = nextQuantity
  }

  const removeFromCart = (index) => {
    if (index >= 0 && index < cart.value.length) {
      cart.value.splice(index, 1)
    }
  }

  const clearCart = () => {
    cart.value = []
  }

  return {
    cart,
    totalCount,
    totalPrice,
    formatCOP,
    updateQuantity,
    removeFromCart,
    clearCart
  }
}
