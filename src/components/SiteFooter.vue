<template>
  <footer>
    <p>&copy; 2024 Luis Rivera. Colegio Español Padre Arrupe.</p>
  </footer>
</template>

<script>
export default {
  name: 'SiteFooter'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

footer {
  background-color: #1a237e; /* Azul oscuro */
  color: #FFFFFF; /* Texto en blanco */
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 10px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);
  font-family: 'Poppins', sans-serif;
}

footer p {
  margin: 0;
  font-size: 14px;
  font-weight: 400;
}
</style>
