<template>
    <div class="contact-container">
      <h1>Contáctanos</h1>
      
      <section class="contact-info">
        <h2>Información de Contacto</h2>
        <div class="contact-grid">
          <div class="contact-item">
            <i class="fas fa-phone"></i>
            <h3>Teléfono</h3>
            <p>+503 2289-9870</p>
          </div>
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <h3>Email</h3>
            <p>arrupestore@sportmaster.com</p>
          </div>
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <h3>Dirección</h3>
            <p>Calle Padre Salazar-Simpson, Finca EL Espíritu Santo s/n. Soyapango. </p>
          </div>
          <div class="contact-item">
            <i class="fas fa-clock"></i>
            <h3>Horario</h3>
            <p>Lun-Vie: 9:00-20:00</p>
            <p>Sáb: 10:00-14:00</p>
          </div>
        </div>
      </section>
  
      <section class="contact-form">
        <h2>Envíanos un Mensaje</h2>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Nombre:</label>
            <input type="text" id="name" v-model="form.name" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="form.email" required>
          </div>
          <div class="form-group">
            <label for="subject">Asunto:</label>
            <input type="text" id="subject" v-model="form.subject" required>
          </div>
          <div class="form-group">
            <label for="message">Mensaje:</label>
            <textarea id="message" v-model="form.message" required></textarea>
          </div>
          <button type="submit">Enviar Mensaje</button>
        </form>
      </section>
  
      <section class="faq">
        <h2>Preguntas Frecuentes</h2>
        <div v-for="(item, index) in faqItems" :key="index" class="faq-item">
          <h3 @click="toggleFaq(index)">{{ item.question }}</h3>
          <p v-show="item.isOpen">{{ item.answer }}</p>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactView',
    data() {
      return {
        form: {
          name: '',
          email: '',
          subject: '',
          message: ''
        },
        faqItems: [
          {
            question: '¿Cuál es el tiempo de entrega?',
            answer: 'Normalmente, el tiempo de entrega es de 3-5 días laborables.',
            isOpen: false
          },
          {
            question: '¿Tienen política de devoluciones?',
            answer: 'Sí, aceptamos devoluciones dentro de los 30 días posteriores a la compra.',
            isOpen: false
          },
          {
            question: '¿Ofrecen envío internacional?',
            answer: 'Sí, enviamos a la mayoría de los países. Los costos varían según el destino.',
            isOpen: false
          }
        ]
      }
    },
    methods: {
      submitForm() {
        // Aquí iría la lógica para enviar el formulario
        console.log('Formulario enviado', this.form);
        // Reiniciar el formulario después de enviar
        this.form = {name: '', email: '', subject: '', message: ''};
      },
      toggleFaq(index) {
        this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
      }
    }
  }
  </script>
  
  <style scoped>
  .contact-container {
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
  
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    margin-bottom: 40px;
  }
  
  .contact-item {
    text-align: center;
    padding: 20px;
    background-color: #f8f8f8;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  .contact-item i {
    font-size: 2em;
    color: #3498db;
    margin-bottom: 10px;
  }
  
  .contact-form form {
    display: grid;
    gap: 20px;
  }
  
  .form-group {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input, textarea {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
  }
  
  button:hover {
    background-color: #2980b9;
  }
  
  .faq-item {
    margin-bottom: 20px;
  }
  
  .faq-item h3 {
    cursor: pointer;
    padding: 10px;
    background-color: #f8f8f8;
    border-radius: 4px;
  }
  
  .faq-item h3:hover {
    background-color: #eee;
  }
  
  .map-container {
    height: 400px;
    background-color: #f8f8f8;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .map-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    .contact-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>