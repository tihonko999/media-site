export const state = () => ({
  platform: {},
})

export const mutations = {
  SET_PLATFORM (state, platform) {
    state.platform = platform
  },
}

export const actions = {
  async nuxtServerInit ({ commit }, { req, $axios }) {
    const { data } = await $axios.get('platform', {
      params: { host: req.headers.host },
    })
    commit('SET_PLATFORM', data)
  },
}
