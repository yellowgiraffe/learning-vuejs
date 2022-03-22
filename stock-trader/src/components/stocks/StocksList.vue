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
  data() {
    return {
      stocks: [
        { id: 1, name: 'BMW', price: 110 },
        { id: 2, name: 'Apple', price: 100 },
        { id: 3, name: 'Meta', price: 200 },
        { id: 4, name: 'Google', price: 210 },
      ]
    }
  }
}
</script>

<style>

</style>