<template>
  <nav>
    <div class="container">
      <ul class="flex">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/blog">Blog</nuxt-link></li>
        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MainNav'
}
</script>
