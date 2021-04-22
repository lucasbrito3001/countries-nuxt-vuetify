import { shallowMount } from '@vue/test-utils'
import { describe, expect, test } from '@jest/globals'
import Index from '@/pages/index.vue'
import Country from '@/pages/country/_SelectedCountry.vue'

describe('O index renderizou', () => {
  test('É uma instância Vue', () => {
    const wrapper = shallowMount(Index)
    expect(wrapper.vm).toBeTruthy()
  })
})

describe('O country renderizou', () => {
  test('É uma instância Vue', () => {
    const wrapper = shallowMount(Country)
    expect(wrapper.vm).toBeTruthy()
  })
})