<template>
  <header>
    <img src="https://cdn-icons-png.flaticon.com/512/8771/8771926.png" alt="Logo del sitio" class="logo" />
    <h1>Arrupe Store</h1>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

header {
  background: linear-gradient(135deg, #3a7bd5, #00d2ff);
  /* Nuevo degradado más suave */
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.2em;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* Sombra sutil */
}

.logo {
  height: 55px;
  margin-right: 20px;
  filter: drop-shadow(0 2px 2px rgba(0, 0, 0, 0.1));
  /* Sombra para el logo */
}

h1 {
  font-family: 'Poppins', sans-serif;
  font-size: 2.2em;
  font-weight: 700;
  margin: 0;
  letter-spacing: 0.5px;
  /* Mejor espaciado entre letras */
}
</style>