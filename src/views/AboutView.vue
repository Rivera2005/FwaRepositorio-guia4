<template>
    <div class="about-container">
        <header class="hero">
            <h1>Acerca de SportMaster</h1>
            <p>Tu destino para equipamiento deportivo de calidad</p>
        </header>

        <section class="our-story">
            <h2>Nuestra Historia</h2>
            <div class="story-content">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDMUXLVxU5k5eB1cSzOrJWXVV32vLJfMjgPQ&s" alt="Fachada de nuestra primera tienda" class="story-image" />
                <p>
                    Fundada en 2005, SportMaster nació de la pasión por el deporte y el compromiso con la excelencia.
                    Comenzamos como una pequeña tienda local y hemos crecido hasta convertirnos en un referente
                    nacional en equipamiento deportivo de alta calidad.
                </p>
            </div>
        </section>

        <section class="our-mission">
            <h2>Nuestra Misión</h2>
            <p>
                En SportMaster, nos dedicamos a inspirar y equipar a atletas de todos los niveles.
                Creemos que el deporte tiene el poder de cambiar vidas, y nuestra misión es proporcionar
                el mejor equipamiento y asesoramiento para ayudarte a alcanzar tus metas deportivas.
            </p>
        </section>

        <section class="our-products">
            <h2>Nuestros Productos</h2>
            <div class="product-grid">
                <div class="product-category" v-for="category in categories" :key="category.name">
                    <img :src="category.image" :alt="category.name" />
                    <h3>{{ category.name }}</h3>
                </div>
            </div>
        </section>

        <section class="our-team">
            <h2>Nuestro Equipo</h2>
            <div class="team-grid">
                <div class="team-member" v-for="member in team" :key="member.name">
                    <img :src="member.photo" :alt="member.name" style="width: 150px; height: 150px;">
                    <h3>{{ member.name }}</h3>
                    <p>{{ member.position }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'AboutView',
    data() {
        return {
            categories: [
                { name: 'Fútbol', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2tN-mJclA5jsceB8h1Y_ZSs3lIDqGzwOFvA&s' },
                { name: 'Baloncesto', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHUwarZQrpSiD8elF-8lY5wSbwnMBO-1Qrwg&s' },
                { name: 'Tenis', image: 'https://img.freepik.com/vector-premium/tenis-deporte-silueta-logo-icono-ilustracion-marca-identidad_7109-1012.jpg' },
                { name: 'Running', image: 'https://cdn-icons-png.flaticon.com/512/1267/1267761.png' },
            ],
            team: [
                { name: 'Luis Rivera', position: 'CEO', photo: 'https://cdn-icons-png.flaticon.com/512/6326/6326055.png' },
            ],
        };
    },
};
</script>

<style scoped>
.about-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    font-family: 'Arial', sans-serif;
}

.hero {
    background-image: url('https://www.followupcx.com/wp-content/uploads/2019/03/retail-deportivo.jpg');
    background-size: cover;
    background-position: center;
    color: white;
    text-align: center;
    padding: 100px 20px;
    margin-bottom: 40px;
}

.hero h1 {
    font-size: 3em;
    margin-bottom: 10px;
}

.hero p {
    font-size: 1.2em;
}

section {
    margin-bottom: 40px;
}

h2 {
    color: #333;
    border-bottom: 2px solid #3498db;
    padding-bottom: 10px;
    margin-bottom: 20px;
}

.story-content {
    display: flex;
    align-items: center;
    gap: 20px;
}

.story-image {
    max-width: 50%;
    border-radius: 10px;
}

.product-grid,
.team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.product-category,
.team-member {
    text-align: center;
}

.product-category img,
.team-member img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
}


@media (max-width: 768px) {
    .story-content {
        flex-direction: column;
    }

    .story-image {
        max-width: 100%;
    }
}
</style>