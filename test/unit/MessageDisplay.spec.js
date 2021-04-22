import MessageDisplay from '@/components/MessageDisplay.vue'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios'
import flushPromises from 'flush-promises'

jest.mock('@/services/axios')

describe('MessageDisplay', () => {
  it('Calls getMessage and display message', async () => {
    const mockMessage = {"name":"Brazil"}
    getMessage.mockResolvedValueOnce({ "brasil": mockMessage })
    const wrapper = mount(MessageDisplay)

    await flushPromises()

    expect(getMessage).toHaveBeenCalledTimes(1)
    const message = wrapper.find('[data-testid="message"]').element.textContent
    console.log(message)
    expect(message).toEqual(mockMessage.name)
  })
})