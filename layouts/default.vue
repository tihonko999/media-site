<template lang="pug">
  .container
    topline
    nuxt.page
    page-footer
</template>

<script>
import { mapState } from 'vuex'
import PageFooter from '~/components/page-footer'
import Topline from '~/components/topline'

export default {
  components: { PageFooter, Topline },
  head () {
    return {
      title: this.platform.title,
      htmlAttrs: {
        class: !this.$device.isMobile ? '__desktop' : '',
      },
      style: [
        { cssText: `:root { --active-color: ${this.platform.active_color}; }`, type: 'text/css' },
      ],
      link: [
        { rel: 'icon', href: this.platform.favicon },
      ],
    }
  },
  computed: {
    ...mapState(['platform']),
  },
}
</script>

<style lang="sass" scoped>
.page
  padding: 15px
</style>
