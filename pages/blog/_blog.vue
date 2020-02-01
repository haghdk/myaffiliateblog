<template>
  <div class="container">
    <article class="blogpost">
      <img src="/img/350x150.png" class="blogpost--image" />
      <h1>{{ blogPost.title }}</h1>

      <time :datetime="blogPost.date">{{ blogPost.date | moment('LL') }}</time>

      <div v-html="$md.render(blogPost.body)" />
    </article>
  </div>
</template>

<style lang="scss" scoped>
.blogpost--image {
  margin-bottom: 1.25rem;
}
</style>

<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) {
      this.blogPost = payload
      return {
        blogPost: payload
      }
    } else {
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`)
      }
    }
  },

  head() {
    return {
      title: this.blogPost.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.blogPost.description
        },
        {
          hid: 'title',
          name: 'title',
          content: this.blogPost.title
        }
      ]
    }
  }
}
</script>
