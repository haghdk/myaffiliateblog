<template>
  <section id="blogPosts">
    <div class="container">
      <h1>Blog</h1>

      <article
        v-for="(blogPost, index) in blogPosts"
        :key="index"
        class="blog-post-card"
      >
        <div class="blog-post-card--inner">
          <nuxt-link :to="`blog/${blogPost.slug}`">{{
            blogPost.title
          }}</nuxt-link>
          <span class="blog-post-card--teaser">{{ blogPost.description }}</span>
        </div>
      </article>
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
    }
  }
}
</script>
