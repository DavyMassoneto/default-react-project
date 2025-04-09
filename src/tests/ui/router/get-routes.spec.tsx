import { createMemoryHistory } from 'history'
import { describe, it, expect } from 'vitest'
import { render } from 'vitest-browser-react'

import { renderRoutesWithHistory } from '@/tests/__mocks__'
import { getRoutes } from '@/ui/router'

import type { GetRoutesMakeSutProps, GetRoutesMakeSutResult } from './interfaces'

const makeSut = (props?: GetRoutesMakeSutProps): GetRoutesMakeSutResult => {
  const history = createMemoryHistory({
    initialEntries: [props?.initialPath ?? '/'],
  })

  const sut = render(renderRoutesWithHistory(history, getRoutes()))

  return { sut, history }
}

describe('get-routes', () => {
  it('should render "/health-check" correctly', () => {
    const { sut } = makeSut({ initialPath: '/health-check' })
    expect(sut.getByText('true')).toBeInTheDocument()
  })

  it('should render fallback route for invalid paths', () => {
    const { sut } = makeSut({ initialPath: '/rota-invalida' })
    expect(sut.getByText('Not Found')).toBeInTheDocument()
  })

  it('should navigate between routes using history and rerender', () => {
    const { sut, history } = makeSut({ initialPath: '/health-check' })

    expect(sut.getByText('true')).toBeInTheDocument()

    history.push('/not-found')
    sut.rerender(renderRoutesWithHistory(history, getRoutes()))
    expect(sut.getByText('Not Found')).toBeInTheDocument()

    history.push('/health-check')
    sut.rerender(renderRoutesWithHistory(history, getRoutes()))
    expect(sut.getByText('true')).toBeInTheDocument()
  })
})
