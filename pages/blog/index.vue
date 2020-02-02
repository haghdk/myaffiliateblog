<template>
  <div>
    <header>
      <h1 class="title">{{ headerTitle }}</h1>
    </header>

    <main>
      <section id="blogPosts">
        <div class="container">
          <div class="blog-post-wrapper flex">
            <article
              v-for="(blogPost, index) in blogPosts"
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

                <nuxt-link :to="`blog/${blogPost.slug}`" class="text-bold">
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
<script>
export default {
  data() {
    return {
      headerTitle: 'Blog'
    }
  },
  head() {
    return {
      title: 'Blog',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  },
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts
    }
  }
}
</script>
