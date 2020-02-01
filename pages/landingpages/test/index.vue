<template>
  <section id="testLanding" class="full-height">
    <div class="container">
      <div class="form-wrapper">
        <GetResponseForm :formpage="test" thanks="http://www.tv2.dk" />
      </div>
    </div>
  </section>
</template>

<style scoped>
main {
  margin: 0;
}

.container {
  background-color: #000;
}
</style>

<script>
import GetResponseForm from '@/components/GetResponseForm'

export default {
  layout: 'landing',
  components: {
    GetResponseForm
  },
  head: {
    bodyAttrs: {
      class: 'landing-page',
      id: 'test'
    }
  },
  beforeMount() {
    let main = document.querySelector('main')
    main.classList.add('no-margin')
  }
}
</script>
