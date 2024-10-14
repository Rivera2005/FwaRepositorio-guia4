<template>
  <SiteHeader />
  <NavMenu />
  <ImageBanner />
  <router-view>
  </router-view>
  <SiteFooter />
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import NavMenu from './components/NavMenu.vue'
import ImageBanner from './components/ImageBanner.vue'

export default {
  components: {
    SiteHeader,
    SiteFooter,
    NavMenu,
    ImageBanner,
  },
}
</script>
