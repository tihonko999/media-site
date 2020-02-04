<template lang="pug">
  .container
    topline
    nuxt.page
    footer
</template>

<script>
import PageFooter from '~/components/page-footer'
import Topline from '~/components/topline'

export default {
  components: { PageFooter, Topline },
}
</script>

<style lang="sass" scoped>
.page
  padding: 10px
</style>
