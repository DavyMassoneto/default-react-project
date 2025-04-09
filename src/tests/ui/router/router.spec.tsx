import { createMemoryHistory } from 'history'
import { describe, it, expect, vi } from 'vitest'
import { render } from 'vitest-browser-react'

import { Router } from '@/ui/router'

import type { RouterMakeSutProps, RouterMakeSutResult } from './interfaces'

const makeSut = (props?: RouterMakeSutProps): RouterMakeSutResult => {
  const history = createMemoryHistory({
    initialEntries: [props?.initialPath ?? '/backoffice/treinamento-front/health-check'],
  })

  const sut = render(<Router history={history} />)

  return { sut, history }
}

describe('router', () => {
  it('should call history.listen when rendered', () => {
    const history = createMemoryHistory()
    const listenSpy = vi.spyOn(history, 'listen')

    render(<Router history={history} />)

    expect(listenSpy).toHaveBeenCalled()
  })

  it('should render route content based on initial path', () => {
    const { sut: healthSut } = makeSut({
      initialPath: '/backoffice/treinamento-front/health-check',
    })
    expect(healthSut.getByText('true')).toBeInTheDocument()

    const { sut: notFoundSut } = makeSut({
      initialPath: '/backoffice/treinamento-front/rota-invalida',
    })
    expect(notFoundSut.getByText('Not Found')).toBeInTheDocument()
  })

  it('should react to navigation changes via history.push and rerender', () => {
    const { sut, history } = makeSut({
      initialPath: '/backoffice/treinamento-front/health-check',
    })

    expect(sut.getByText('true')).toBeInTheDocument()

    history.push('/backoffice/treinamento-front/rota-invalida')
    sut.rerender(<Router history={history} />)
    expect(sut.getByText('Not Found')).toBeInTheDocument()

    history.push('/backoffice/treinamento-front/health-check')
    sut.rerender(<Router history={history} />)
    expect(sut.getByText('true')).toBeInTheDocument()
  })
})
