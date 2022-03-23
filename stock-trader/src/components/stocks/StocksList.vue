<template>
  <div>
    <stock-item
      v-for="stock in stocks"
      :key="stock.id"
      :stock="stock"
    />
  </div>
</template>

<script>
import StockItem from './StockItem.vue'

export default {
  components: { StockItem },
  computed: {
    stocks() {
      return this.$store.getters.stocks
    }
  }
}
</script>

<style>

</style>