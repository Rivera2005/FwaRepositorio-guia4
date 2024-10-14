<template>
  <nav>
    <ul>
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/about">Acerca</router-link></li>
      <li><router-link to="/Service">Servicios</router-link></li>
      <li><router-link to="/contact">Contacto</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

body {
  margin: 0;
  padding: 0;
}

nav {
  background-color: #2c3e50;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav ul li {
  margin: 0;
}

nav ul li a {
  display: block;
  color: #ecf0f1;
  text-align: center;
  padding: 16px 24px;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 1em;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  position: relative;
}

nav ul li a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 3px;
  background-color: #3498db;
  transition: all 0.3s ease;
}

nav ul li a:hover {
  color: #3498db;
  background-color: rgba(255,255,255,0.1);
}

nav ul li a:hover::after {
  width: 100%;
  left: 0;
}

nav ul li a:active {
  transform: scale(0.95);
}

@media (max-width: 600px) {
  nav ul {
    flex-direction: column;
  }
  
  nav ul li {
    width: 100%;
  }
  
  nav ul li a {
    padding: 12px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
  }
}
</style>