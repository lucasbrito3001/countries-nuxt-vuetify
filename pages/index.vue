<template>
  <div id="content">
    <aside>
      <Selects :array_first_filter_props="array_first_filter" @filtered-flags="fillArrayWithFilteredFlags" />
    </aside>
    <main>
      <Flags :array_filtered_flags_props="array_filtered_flags" />
    </main>
  </div>
</template>

<script>
import Selects from '../components/Selects.vue'
import Flags from '../components/Flags.vue'
export default {
  components: { Selects, Flags },
  data () {
    return {
      array_first_filter: [
        { filter: 'Região', value: 'region' },
        { filter: 'Capital', value: 'capital' },
        { filter: 'Língua', value: 'lang' },
        { filter: 'País', value: 'name' },
        { filter: 'Código de Ligação', value: 'callingcode' }
      ],
      array_filtered_flags: []
    }
  },
  methods: {
    fillArrayWithFilteredFlags (filteredFlags) {
      this.array_filtered_flags = filteredFlags
    }
  }
}
</script>

<style>

</style>
