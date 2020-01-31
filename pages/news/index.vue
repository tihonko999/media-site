<template lang="pug">
  ul.news
    li(v-for="item in items")
      nuxt-link(:to="`/news/${item.id}`") {{item.title}}
</template>

<script>
export default {
  head () {
    return {
      title: 'Новости',
    }
  },
  async asyncData ({ $axios, error }) {
    try {
      const { data } = await $axios.get('matters')
      return { items: data }
    } catch (e) {
      error(e)
    }
  },
}
</script>

<style lang="sass" scoped>
.news
  margin: 15px
li
  margin-bottom: 10px
</style>
