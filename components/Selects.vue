<template>
    <v-layout align-center justify-space-between row wrap class="mt-10">
        <v-flex md4 sm6 xs12 class="inputs">
            <v-select
            label="Filtrar por"
            :items='array_first_filter_props'
            item-value="value"
            item-text="filter"
            @input="selectSecondFilter(first_filter_selected.value)"
            v-model="first_filter_selected"
            return-object
            />
        </v-flex>
        <v-flex
        md4
        sm6
        xs12
        v-show="second_filter"
        class="inputs">
            <v-select
            :label=first_filter_selected.filter
            :items="items_second_filter"
            item-text="text"
            item-value="value"
            return-object
            v-model="second_filter_selected"
            />
        </v-flex>
        <v-flex md4 sm6 xs12 class="inputs mb-10">
            <v-btn
            id="search_button"
            class="ml-10 px-6"
            outlined
            small
            @click="sendRequestGET"
            >
            Pesquisar</v-btn>
        </v-flex>
    </v-layout>
</template>

<script>
import Constants from '../constants'
export default {
  props: {
    array_first_filter_props: {
      type: Array
    }
  },
  data () {
    return {
      second_filter: false,
      first_filter_selected: '',
      second_filter_selected: '',
      response_all: [],
      items_second_filter: [],
      objectWithObjectsPrepared: { region: [], capital: [], languages: [], callingCodes: [], countries: [] }
    }
  },
  async mounted () {
    try {
      const res = await this.$axios.$get(Constants.API_URL + '/all?fields=region,languages,capital,callingCodes,name')
      this.prepareSelects(res)
    } catch (error) {
      console.error(error)
    }
  },
  methods: {
    prepareSelects (datasToFilter) {
      datasToFilter.forEach((element) => {
        if (this.objectWithObjectsPrepared.region.find(region => region.text === element.region) === undefined) {
          this.objectWithObjectsPrepared.region.push({
            text: element.region,
            value: element.region.toLowerCase()
          })
        }

        this.objectWithObjectsPrepared.capital.push({
          text: element.capital,
          value: element.capital.toLowerCase()
        })

        this.objectWithObjectsPrepared.countries.push({
          text: element.name,
          value: element.name.toLowerCase()
        })

        element.callingCodes.forEach((subCode) => {
          if (this.objectWithObjectsPrepared.callingCodes.includes(subCode) === false) {
            this.objectWithObjectsPrepared.callingCodes.push(
              { text: '+ ' + subCode, value: subCode }
            )
          }
        })

        element.languages.forEach((subLang) => {
          if (
            this.objectWithObjectsPrepared.languages.find(name => name.text === subLang.name) === undefined
          ) {
            this.objectWithObjectsPrepared.languages.push({ text: subLang.name, value: subLang.iso639_1 })
          }
        })
      })
    },
    selectSecondFilter (selectedFirstFilter) {
      this.second_filter = true
      switch (selectedFirstFilter) {
        case 'region':
          this.items_second_filter = this.objectWithObjectsPrepared.region
          break

        case 'capital':
          this.items_second_filter = this.objectWithObjectsPrepared.capital
          break

        case 'callingcode':
          this.items_second_filter = this.objectWithObjectsPrepared.callingCodes.sort()
          break

        case 'lang':
          this.items_second_filter = this.objectWithObjectsPrepared.languages
          break

        case 'name':
          this.items_second_filter = this.objectWithObjectsPrepared.countries
          break
      }
    },
    async sendRequestGET () {
      const res = await this.$axios.$get(`${Constants.API_URL}/${this.first_filter_selected.value}/${this.second_filter_selected.value}`)
      const filteredFlags = []
      res.forEach(element => filteredFlags.push({
        name: element.alpha3Code.toLowerCase(),
        src_flag: element.flag
      }))

      this.$emit('filtered-flags', filteredFlags)
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../assets/variables.scss';

#search_button {
    background-color: $purple-default;
    color: white;
    border: none;
    border-radius: 10px;
    @include breakpoint(smallOnly) {
      float: right;
    }
}

.inputs {
  padding: 0 20px;
}
</style>
