<template>
  <div class="row">
    <user-stock
      v-for="stock in stocksPortfolio"
      :key="stock.id"
      :stock="stock"
    />
  </div>

</template>

<script>
import UserStock from './UserStock.vue'

export default {
  components: { UserStock },
  computed: {
    stocksPortfolio() {
      return this.$store.getters.stockPortfolio
    }
  },
}
</script>

<style>

</style>