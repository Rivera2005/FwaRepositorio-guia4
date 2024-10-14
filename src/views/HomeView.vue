<template>
  <main>
    <h2>Bienvenido a nuestro sitio de productos</h2>
    <ProductFilter :categorias="categorias" :selectedCategory="selectedCategory" @filter="filterByCategory" />
    <div class="product-cards">
      <TransitionGroup name="fade" tag="div" class="product-grid">
        <div v-for="producto in filteredProducts" :key="producto.id" class="product-card">
          <img :src="producto.imagen" :alt="producto.nombre" />
          <div class="product-info">
            <h3>{{ producto.nombre }}</h3>
            <p class="categoria">{{ producto.categoria }}</p>
            <p class="precio">Precio: {{ formatPrice(producto.precio) }}</p>
            <button @click="addToCart(producto)" class="add-to-cart">Añadir al carrito</button>
          </div>
        </div>
      </TransitionGroup>
    </div>
    <div v-if="filteredProducts.length === 0" class="no-results">
      No se encontraron productos en esta categoría.
    </div>
    <div v-if="cartItems.length > 0" class="cart-summary">
      <h3>Carrito</h3>
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          {{ item.nombre }} - {{ formatPrice(item.precio) }}
          <button @click="removeFromCart(item)" class="remove-item">×</button>
        </li>
      </ul>
      <p class="cart-total">Total: {{ formatPrice(cartTotal) }}</p>
      <button class="checkout-button">Proceder al pago</button>
    </div>
  </main>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import ProductFilter from '../components/ProductFilter.vue';

export default {
  name: 'HomeView',
  components: {
    ProductFilter
  },
  setup() {
    const selectedCategory = ref('');
    const categorias = ref(['Fútbol', 'Básquet', 'Tenis', 'Natación', 'Ciclismo']);
    const productos = ref([
      { id: 1, imagen: 'https://siman.vtexassets.com/arquivos/ids/4618441-800-800?v=638289496945600000&width=800&height=800&aspect=true', nombre: 'Balón de Fútbol Adidas', precio: 29.99, categoria: 'Fútbol' },
      { id: 2, imagen: 'https://www.forumsport.com/images/nike-camiseta-de-futbol-oficiales-nino-barcelona-25-y-nk-df-jsy-ss-stad-hm-06-1000962899-500x500-f', nombre: 'Camiseta de Fútbol Nike', precio: 49.99, categoria: 'Fútbol' },
      { id: 3, imagen: 'https://http2.mlstatic.com/D_NQ_NP_702683-MPE69499594564_052023-O.webp', nombre: 'Balón de Básquet Spalding', precio: 59.99, categoria: 'Básquet' },
      { id: 4, imagen: 'https://images.footballfanatics.com/chicago-bulls/chicago-bulls-michael-jordan-1997-alternate-authentic-jersey-by-mitchell-and-ness-black-mens_ss4_p-12002702+u-972ckwi3lu0uenhrapk2+v-1dfbd89d421540cdb25ef52e1038afdb.jpg?_hv=2&w=340', nombre: 'Camiseta de Básquet Jordan', precio: 69.99, categoria: 'Básquet' },
      { id: 5, imagen: 'https://siman.vtexassets.com/arquivos/ids/5195524-800-800?v=638437004238200000&width=800&height=800&aspect=true', nombre: 'Raqueta de Tenis Wilson', precio: 89.99, categoria: 'Tenis' },
      { id: 6, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKg1nzMSAh4aMp0hA8ltdWNjORKLqk06t8ig&s', nombre: 'Pelotas de Tenis Dunlop', precio: 19.99, categoria: 'Tenis' },
      { id: 7, imagen: 'https://siman.vtexassets.com/arquivos/ids/1168591/101647407.jpg?v=637508118222830000', nombre: 'Gafas de Natación Speedo', precio: 24.99, categoria: 'Natación' },
      { id: 8, imagen: 'https://resources.sears.com.mx/medios-plazavip/fotos/productos_sears1/original/3810707.jpg?scale=500&qlty=75', nombre: 'Traje de baño Arena', precio: 39.99, categoria: 'Natación' },
      { id: 9, imagen: 'https://cdn.mercandu.com/products/4f5347c5-9d59-4d6f-bf82-b3db70293d37.webp', nombre: 'Casco de Ciclismo Bell', precio: 49.99, categoria: 'Ciclismo' },
      { id: 10, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbTJwZH9BOHLTN3GnZb0SpgUqr25wTbEvqgw&s', nombre: 'Guantes de Ciclismo Giro', precio: 29.99, categoria: 'Ciclismo' }
    ]);
    const filteredProducts = ref([]);
    const cartItems = ref([]);

    const cartTotal = computed(() => {
      return cartItems.value.reduce((total, item) => total + item.precio, 0);
    });

    onMounted(() => {
      filteredProducts.value = productos.value;
    });

    const filterByCategory = (category) => {
      selectedCategory.value = category;
      if (category) {
        filteredProducts.value = productos.value.filter(producto => producto.categoria === category);
      } else {
        filteredProducts.value = productos.value;
      }
    };

    const formatPrice = (price) => {
      return `$${price.toFixed(2)}`;
    };

    const addToCart = (producto) => {
      cartItems.value.push(producto);
    };

    const removeFromCart = (item) => {
      const index = cartItems.value.findIndex(cartItem => cartItem.id === item.id);
      if (index !== -1) {
        cartItems.value.splice(index, 1);
      }
    };

    return {
      selectedCategory,
      categorias,
      filteredProducts,
      cartItems,
      cartTotal,
      filterByCategory,
      formatPrice,
      addToCart,
      removeFromCart
    };
  }
};
</script>


<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');


:root {
  --primary-color: #3498db;
  --secondary-color: #2c3e50;
  --accent-color: #e74c3c;
  --background-color: #ecf0f1;
  --text-color: #34495e;
}

body {
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: 'Poppins', sans-serif;
}

main {
  padding: 20px;
  margin: 0 auto;
  max-width: 1200px;
  padding-bottom: 60px;
}

h2 {
  color: var(--secondary-color);
  text-align: center;
  margin-bottom: 30px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.product-card {
  border: none;
  border-radius: 10px;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.product-info {
  padding: 15px;
}

.product-card h3 {
  margin: 0 0 10px;
  font-size: 1.2em;
  color: var(--secondary-color);
}

.categoria {
  font-size: 0.9em;
  color: var(--text-color);
  margin-bottom: 5px;
}

.precio {
  font-size: 1.1em;
  color: var(--primary-color);
  font-weight: bold;
  margin-bottom: 10px;
}

.add-to-cart {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-to-cart:hover {
  background-color: #2980b9;
}

.no-results {
  text-align: center;
  margin-top: 20px;
  color: var(--text-color);
}

.cart-summary {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #fff;
  border: none;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  width: 100%;
}

.cart-summary h3 {
  color: var(--secondary-color);
  margin-top: 0;
}

.cart-summary ul {
  list-style-type: none;
  padding: 0;
}

.cart-summary li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.remove-item {
  background-color: var(--accent-color);
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.cart-total {
  font-weight: bold;
  margin-top: 10px;
  color: var(--primary-color);
}

.checkout-button {
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
  margin-top: 10px;
}

.checkout-button:hover {
  background-color: #2980b9;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>