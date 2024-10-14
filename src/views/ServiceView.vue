<template>
    <div class="services-container">
      <h1>Nuestros Servicios</h1>
      
      <section class="services-intro">
        <p>En SportMaster, nos dedicamos a ofrecer servicios de calidad para mejorar tu experiencia deportiva. Descubre cómo podemos ayudarte a alcanzar tus metas atléticas.</p>
      </section>
  
      <section class="services-grid">
        <div v-for="service in services" :key="service.id" class="service-card">
          <img :src="service.image" :alt="service.name" class="service-image">
          <div class="service-content">
            <h2>{{ service.name }}</h2>
            <p>{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="feature in service.features" :key="feature">{{ feature }}</li>
            </ul>
            <button @click="bookService(service.id)" class="book-button">Reservar</button>
          </div>
        </div>
      </section>
  
      <section class="testimonials">
        <h2>Lo que dicen nuestros clientes</h2>
        <div class="testimonial-slider">
          <div v-for="testimonial in testimonials" :key="testimonial.id" class="testimonial-card">
            <p>"{{ testimonial.quote }}"</p>
            <div class="testimonial-author">
              <span>{{ testimonial.name }}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ServicesView',
    data() {
      return {
        services: [
          {
            id: 1,
            name: 'Asesoramiento Personalizado',
            description: 'Nuestros expertos te ayudarán a elegir el equipo deportivo perfecto para tus necesidades.',
            image: 'https://cdn-icons-png.flaticon.com/512/7871/7871195.png',
            features: ['Consulta individual', 'Análisis de rendimiento', 'Recomendaciones personalizadas']
          },
          {
            id: 2,
            name: 'Reparación de Productos',
            description: 'Servicio profesional de reparación para mantener tus productos en perfectas condiciones.',
            image: 'https://st2.depositphotos.com/4799321/47016/v/450/depositphotos_470163680-stock-illustration-wrench-screwdriver-icon-comic-style.jpg',
            features: ['Diagnóstico gratuito', 'Reparación rápida', 'Garantía de servicio']
          },
          {
            id: 3,
            name: 'Clases de Fitness',
            description: 'Únete a nuestras clases grupales para mejorar tu condición física y técnica.',
            image: 'https://img.freepik.com/vector-gratis/ilustracion-clase-fitness-baile-dibujado-mano-plana_52683-56671.jpg',
            features: ['Variedad de disciplinas', 'Instructores certificados', 'Horarios flexibles']
          },
        ],
        testimonials: [
          {
            id: 1,
            quote: 'El asesoramiento personalizado me ayudó a encontrar el equipo perfecto para mi entrenamiento.',
            name: 'Ana García',
          },
          {
            id: 2,
            quote: 'Las clases de fitness han mejorado significativamente mi rendimiento en el campo.',
            name: 'Carlos Rodríguez',
          },
          {
            id: 3,
            quote: 'El servicio de reparación salvó mi bicicleta justo antes de una competición importante.',
            name: 'Laura Martínez',
          }
        ]
      }
    },
    methods: {
      bookService(serviceId) {
        // Aquí iría la lógica para reservar un servicio
        console.log(`Reservando servicio con ID: ${serviceId}`);
      },
      contactUs() {
        // Aquí iría la lógica para redirigir a la página de contacto
        console.log('Redirigiendo a la página de contacto');
      }
    }
  }
  </script>
  
  <style scoped>
  .services-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  h1, h2 {
    color: #333;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }
  
  .services-intro {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-bottom: 40px;
  }
  
  .service-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .service-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .service-content {
    padding: 20px;
  }
  
  .service-features {
    list-style-type: none;
    padding-left: 0;
  }
  
  .service-features li::before {
    content: "✓";
    color: #3498db;
    margin-right: 5px;
  }
  
  .book-button, .cta-button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  .book-button:hover, .cta-button:hover {
    background-color: #2980b9;
  }
  
  .testimonials {
    margin-bottom: 40px;
  }
  
  .testimonial-slider {
    display: flex;
    overflow-x: auto;
    gap: 20px;
    padding: 20px 0;
  }
  
  .testimonial-card {
    flex: 0 0 300px;
    background-color: #f8f8f8;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  }
  
  .testimonial-author {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
  
  .author-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  
  .cta {
    text-align: center;
    background-color: #f8f8f8;
    padding: 40px;
    border-radius: 8px;
  }
  
  @media (max-width: 768px) {
    .services-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>