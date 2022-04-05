import { render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import AppButton from './AppButton.vue'

test('renders button', () => {
  // arrange
  const options = {
    slots: {
      default: 'Test Button'
    }
  }

  // act
  render(AppButton, options)

  // assert
  screen.getByText(/test button/i)
})

