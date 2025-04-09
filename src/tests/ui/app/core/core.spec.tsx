import { createMemoryHistory } from 'history'
import { describe, it, expect, vi } from 'vitest'
import { render } from 'vitest-browser-react'

import { Core } from '@/ui/app'

import { MakeSutProps, MakeSutResult } from './interfaces'

vi.mock('@/ui/router', () => ({
  Router: () => <div data-testid="core" />,
}))

const makeSut = (props?: MakeSutProps): MakeSutResult => {
  const history = props?.history ?? createMemoryHistory()
  const sut = render(<Core history={history} />)
  return { sut }
}

describe('core', () => {
  it('should render correctly', () => {
    const { sut } = makeSut()
    expect(sut.getByTestId('core')).toBeInTheDocument()
  })
})
