<template>
  <nav>
    <div class="container">
      <ul class="flex" :class="{ 'js-active': mobileMenu }">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/blog">Blog</nuxt-link></li>
        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
      </ul>

      <a href="#" class="mobile-menu-opener" @click="mobileMenu = !mobileMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" /></svg
      ></a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainNav',
  data() {
    return {
      mobileMenu: false
    }
  },
  watch: {
    $route() {
      this.mobileMenu = false
    }
  }
}
</script>
