<template>
  <div>
    <MainNav />

    <nuxt />

    <footer>
      <div class="container"></div>
    </footer>
  </div>
</template>

<script>
import MainNav from '@/components/MainNav'

export default {
  components: {
    MainNav
  }
}
</script>
