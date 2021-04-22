|<template>
  <v-layout row wrap>
    <v-flex
    v-for="border in array_borders_props"
    :key="border"
    xs12
    sm6
    md4
    class="px-3">
      <NuxtLink :to="{ name: 'country-SelectedCountry' , params: { SelectedCountry: border.toLowerCase() }}">
        <v-card tile class="mb-5">
          <v-img :src="'https://restcountries.eu/data/' + border.toLowerCase() + '.svg'"/>
        </v-card>
      </NuxtLink>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: {
    array_borders_props: {
      type: Array
    }
  }
}
</script>

<style>

</style>
