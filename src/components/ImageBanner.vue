<template>
  <div class="banner">
    <img v-for="(image, index) in images" :key="index" :src="image" :class="{ active: index === currentImageIndex }" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://i0.wp.com/guiadecomprasorlando.com/wp-content/uploads/2020/09/20191208_132538.jpg?fit=4608%2C2184&ssl=1?v=1613048944',
        'https://muchosnegociosrentables.com/wp-content/uploads/2021/01/como-montar-una-tienda-de-deportes.jpg',
        'https://salvadorcolom.com/cdn/shop/files/Photo_1.jpg?crop=center&height=1200&v=1706358796&width=1200'
      ],
      currentImageIndex: 0
    }
  },
  mounted() {
    setInterval(this.nextImage, 5000)
  },
  methods: {
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length
    }
  }
}
</script>

<style scoped>
.banner {
  position: relative;
  height: 400px;
  overflow: hidden;
}

.banner img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.banner img.active {
  opacity: 1;
}
</style>