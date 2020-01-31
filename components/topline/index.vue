<template lang="pug">
  .topline
    nuxt-link(to="/") {{$store.state.platform.title}}
    nuxt-link(to="/news") Новости
</template>

<style lang="sass" scoped>
.topline
  padding: 15px
  border-bottom: 1px solid #ccc
a
  margin-right: 10px
  &.nuxt-link-exact-active
    font-weight: bold
</style>
