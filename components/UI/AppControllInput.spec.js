import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import AppControlInput from './AppControlInput.vue'

test('renders button', () => {
  // arrange
  const options = {
    slots: {
      default: 'Test Label'
    },
    props: {
      inputId: 'testId'
    }
  }

  // act
  render(AppControlInput, options)

  // assert
  screen.getByLabelText(/test label/i)
})

