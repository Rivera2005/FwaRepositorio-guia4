<template>
  <div class="product-filter">
    <h3>Filtros</h3>
    <div class="filter-group">
      <label for="category-select">Categoría:</label>
      <select id="category-select" :value="selectedCategory" @change="filterProducts" class="filter-select">
        <option value="">Todas las categorías</option>
        <option v-for="categoria in categorias" :key="categoria" :value="categoria">
          {{ categoria }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProductFilter',
  props: {
    categorias: {
      type: Array,
      required: true
    },
    selectedCategory: {
      type: String,
      required: true
    }
  },
  emits: ['filter'],
  setup(props, { emit }) {
    const filterProducts = (event) => {
      emit('filter', event.target.value);
    };
    return {
      filterProducts,
    };
  }
}
</script>

<style scoped>
.product-filter {
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h3 {
  margin-top: 0;
  margin-bottom: 15px;
  color: #333;
}

.filter-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #555;
  font-weight: bold;
}

.filter-select {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: white;
  font-size: 14px;
  transition: border-color 0.3s;
}

.filter-select:focus {
  outline: none;
  border-color: #4CAF50;
}


@media (max-width: 768px) {
  .product-filter {
    padding: 15px;
  }

  .price-inputs {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>