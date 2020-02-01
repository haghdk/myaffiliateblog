<template>
  <div class="container">
    <article>
      <h1>{{ blogPost.title }}</h1>
      <div v-html="$md.render(blogPost.body)" />
    </article>
  </div>
</template>
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
