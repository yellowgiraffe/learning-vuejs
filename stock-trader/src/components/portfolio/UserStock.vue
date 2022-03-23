<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>Price: {{ stock.price }} | Quantity: {{ stock.quantity }}</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            v-model.number="quantity"
            type="number"
            placeholder="Quantity"
            class="form-control"
            :class="{danger: insufficientFunds}"
          >
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)"
            @click="sell"
          >
            {{ insufficientQuantity ? 'Not enought' : 'Sell' }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    'stock': {
      type: Object,
      required: false,
      default: () => {}
    }
  },
  data() {
    return {
      quantity: null,
    }
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity
    }
  },
  methods: {
    sell() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.$store.dispatch('sellStocks', order)
      this.quantity = null
    }
  }
}
</script>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>