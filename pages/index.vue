<template>
  <div>
    <h1 class="title">Nuxt.js & Netlify CMS Starter</h1>
    <h2 class="subtitle">Truly fantastic. Sometimes I astound even myself.</h2>
  </div>
</template>

<script>
export default {
  components: {},
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>
