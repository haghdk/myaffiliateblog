<template>
  <div>
    <header>
      <h1 class="title">{{ headerTitle }}</h1>
    </header>

    <main>
      <section id="main">
        <div class="container">
          <h2 class="subtitle">
            Truly fantastic. Sometimes I astound even myself.
          </h2>
        </div>
      </section>

      <section id="blogPosts">
        <div class="container">
          <div class="blog-post-wrapper flex">
            <article
              v-for="(blogPost, index) in blogPosts.slice(0, 2)"
              :key="index"
              class="blog-post-card"
            >
              <img
                src="/img/350x150.png"
                v-if="blogPost.mainimage"
                class="blog-post-card--image"
              />
              <div class="blog-post-card--inner">
                <nuxt-link :to="`blog/${blogPost.slug}`">{{
                  blogPost.title
                }}</nuxt-link>
                <span class="blog-post-card--teaser">{{
                  blogPost.description
                }}</span>

                <nuxt-link
                  :to="`blog/${blogPost.slug}`"
                  class="text-bold read-more"
                >
                  Read more
                </nuxt-link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
#main {
  padding: 0 0 2.5rem;
}
</style>

<script>
export default {
  components: {},
  data() {
    return {
      headerTitle: 'My Affiliate Blog'
    }
  },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
    }
  },
  head() {
    return {
      script: [
        { src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }
      ]
    }
  }
}
</script>
