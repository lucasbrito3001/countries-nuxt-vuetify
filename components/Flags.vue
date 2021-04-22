<template>
  <div>
      <v-layout row wrap justify-space-between>
          <v-flex
          v-for="flag in array_filtered_flags_props"
          :key="flag.name"
          md4
          sm6
          xs12>
              <NuxtLink :to="{name: 'country-SelectedCountry' , params: { SelectedCountry: flag.name }}">
                <v-card tile class="ma-2">
                    <v-img id="flag_img" :src="flag.src_flag" transition="scroll-y-transition"/>
                </v-card>
              </NuxtLink>
          </v-flex>
      </v-layout>
  </div>
</template>

<script>
export default {
  props: {
    array_filtered_flags_props: {
      type: Array
    }
  }
}
</script>

<style lang='scss' scoped>
#flag_img {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
