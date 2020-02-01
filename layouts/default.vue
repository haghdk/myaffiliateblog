<template>
  <div>
    <header>
      <MainNav />
    </header>

    <main>
      <div class="container">
        <nuxt />
      </div>
    </main>

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
