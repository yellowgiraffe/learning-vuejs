<template>
    <div class="container">
      <app-header />
      <div class="row">
        <div class="col-md-12">
          <transition name="slide" mode="out-in">
            <router-view />
          </transition>
        </div>
      </div>
    </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch('initStocks')
    this.$store.dispatch('fetchData')
  }
}
</script>

<style>
  body {
    padding: 30px;
  }

  .slide-enter-active {
    animation: slide-in .2s ease-out forwards;
  }

  .slide-leave-active {
    animation: slide-out .2s ease-out forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateX(-30px);
      opacity: 0;
    }
    to {
      ransform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      ransform: translateX(-30px);
      opacity: 0;
    }
  }
</style>
