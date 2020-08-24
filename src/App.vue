<template>
  <div class="app">
    <app-header />
    <app-content />
  </div>
</template>

<script>
import AppHeader from '@/components/app/AppHeader'
import AppContent from '@/components/app/AppContent'

export default {
  components: {
    AppHeader,
    AppContent
  }
}
</script>

<style lang="scss">
.app {
  text-align: center;
  color: #2c3e50;
}
</style>
