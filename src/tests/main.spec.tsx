import { describe, it, expect, vi } from 'vitest'
import { render } from 'vitest-browser-react'

vi.mock('@/ui/app', () => ({
  Bootstrap: vi.fn(() => <div data-testid="main" />),
}))

const makeSut = () => render(<div id="root" />)

describe('main', () => {
  it('should render Bootstrap inside root element', async () => {
    makeSut()

    await import('@/main')

    const sut = render(<div />)
    expect(sut.getByTestId('main')).toBeInTheDocument()
  })
})
