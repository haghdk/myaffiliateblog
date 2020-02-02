export const state = () => ({
  blogPosts: []
})

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list
  }
}

export const actions = {
  async nuxtServerInit({ commit }) {
    let files = await require.context(
      '~/assets/content/blog/',
      false,
      /\.json$/
    )

    let blogPosts = files.keys().map(key => {
      let res = files(key)
      res.slug = key.slice(2, -5)
      return res
    })

    const sortedArray = await blogPosts.sort((a, b) => {
      return a.date - b.date
    })

    const reversedArray = await sortedArray.reverse()

    await commit('setBlogPosts', reversedArray)
  }
}
