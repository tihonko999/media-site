<template lang="pug">
  .matter
    h1 {{matter.title}}
    p {{matter.content}}
</template>

<script>
export default {
  head () {
    return {
      title: this.matter.title,
      link: [
        { rel: 'canonical', href: `/news/${this.matter.id}` },
      ],
    }
  },
  amp: 'only',
  ampLayout: 'amp',
  async asyncData ({ $axios, params, error }) {
    try {
      const { data } = await $axios.get(`matters/${params.id}`)
      return { matter: data }
    } catch (e) {
      error(e)
    }
  },
}
</script>
