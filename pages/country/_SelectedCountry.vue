<template>
  <v-layout row wrap>
      <v-flex md5 sm6 xs12 class="mt-10 px-5">
          <v-card tile >
            <v-img :src="selected_country.flag"/>
          </v-card>
      </v-flex>
      <v-flex cols=12 md5 sm6 xs12 class="mt-10">
        <ul>
          <li>Nome: {{selected_country.name}}</li>
          <li>Capital: {{selected_country.capital}}</li>
          <li>Região: <NuxtLink to="/">{{selected_country.region}}</NuxtLink></li>
          <li>Sub-região: {{selected_country.subregion}}</li>
          <li>População: {{selected_country.population}} </li>
          <li>Línguas:
            <span v-for="lang in selected_country.languages" :key="lang.name">
              {{lang.nativeName}}
            </span> <br>
          </li>
        </ul>
      </v-flex>
      <v-flex xs12 class="mt-10 px-5">
        <p>Países Vizinhos:</p>
      </v-flex>
      <v-flex xs12 class="mt-10 px-5">
        <Borders :array_borders_props="selected_country.borders"/>
      </v-flex>
  </v-layout>
</template>

<script>
import Borders from '../../components/Borders'
export default {
  components: { Borders },
  data () {
    return {
      selected_country: []
    }
  },
  mounted () {
    this.teste()
  },
  methods: {
    async teste () {
      try {
        const res = await this.$axios.$get(`https://restcountries.eu/rest/v2/alpha/${this.$route.params.SelectedCountry}`)
        this.selected_country = res
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
ul {
  list-style: none;
}

li {
  margin-bottom: 15px;
}
</style>
