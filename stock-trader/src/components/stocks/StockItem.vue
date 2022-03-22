<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-success">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{ stock.name }}
          <small>Price: {{ stock.price }}</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            v-model.number="quantity"
            type="number"
            class="form-control"
            placeholder="Quantity"
            @change="ddddd"
          >
        </div>
        <div class="pull-right">
          <button
            class="btn btn-success"
            :disabled="quantity <= 0 || !Number.isInteger(quantity)"
            @click="buyStocks"
          >
            Buy
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
  methods: {
    buyStocks() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      console.log(order)
      this.quantity = 0
    },
    ddddd() {
      console.log(typeof this.quantity)
    }
  }
}
</script>

<style>

</style>