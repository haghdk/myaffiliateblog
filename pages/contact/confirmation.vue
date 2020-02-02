<template>
  <div>
    <header>
      <h1 class="title">{{ headerTitle }}</h1>
    </header>

    <main>
      <section id="contact">
        <div class="container">
          <div class="card text-center">
            Your message was recieved! We will get back to you as soon as
            possible
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerTitle: 'Thank you'
    }
  }
}
</script>

<style></style>
