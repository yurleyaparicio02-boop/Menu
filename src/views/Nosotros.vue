<template>
  <div class="about-page">
    <section class="about-intro content-width">
      <div class="intro-copy">
        <span class="dark-eyebrow">Nuestra historia</span>
        <h1><em>Gastrobar</em></h1>
        <p>{{ about.history }}</p>
        <p class="intro-copy">Desde la primera parrilla hasta el último pedido en domicilio, hacemos de cada mesa una experiencia de barrio.</p>
      </div>
      <img class="about-image" :src="about.heroImage" :alt="about.address" />
    </section>

    <section class="info-band">
      <div class="info-grid content-width">
        <div>
          <span class="q-icon material-icons">place</span>
          <div>
            <span>Dirección</span><br><br>
            <strong>{{ about.address }}</strong>
          </div>
        </div>
        <div>
          <span class="q-icon material-icons">access_time</span>
          <div>
            <span>Horarios</span><br><br>
            <strong>{{ about.hours }}</strong>
          </div>
        </div>
        <div>
          <span class="q-icon material-icons">call</span>
          <div>
            <span>Pedidos</span><br><br>
            <strong>{{ about.phone }} / WhatsApp</strong>
          </div>
        </div>
      </div>
    </section>

    <section class="team-section content-width">
      <div class="section-heading">
        <div>
          <span class="dark-eyebrow">Equipo</span>
          <h2>Conoce nuestro equipo</h2>
        </div>
      </div>

      <div class="team-grid">
        <article class="team-card" v-for="person in about.team" :key="person.name">
          <div class="team-image">
            <img :src="person.image" :alt="person.name" class="team-photo" />
          </div>
          <div class="q-card__section">
            <strong>{{ person.name }}</strong>
            <span>{{ person.role }}</span>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { menuData } from '../data/menu.js'

const about = menuData.about
</script>
