import { createBrowserHistory } from 'history'
import { describe, it, expect, vi } from 'vitest'
import { render } from 'vitest-browser-react'

import { Bootstrap } from '@/ui/app'
import { Core } from '@/ui/app/core'

import { MakeSutResult } from './interfaces'

vi.mock('@/ui/app/core', () => ({
  Core: vi.fn(() => <div data-testid="bootstrap" />),
}))

vi.mock(import('history'), async (importOriginal) => {
  const actual = await importOriginal()
  const mockedHistory = actual.createBrowserHistory()

  return {
    ...actual,
    createBrowserHistory: vi.fn(() => mockedHistory),
  }
})

const makeSut = (): MakeSutResult => {
  const sut = render(<Bootstrap authToken="token" />)
  return { sut }
}

describe('bootstrap', () => {
  it('should render bootstrap correctly', () => {
    const { sut } = makeSut()
    expect(sut.getByTestId('bootstrap')).toBeInTheDocument()
  })

  it('should pass props to Core', () => {
    const expected = createBrowserHistory()
    makeSut()

    expect(Core).toHaveBeenCalledWith({ authToken: 'token', history: expected }, undefined)
  })

  it('should call createBrowserHistory', () => {
    makeSut()
    expect(createBrowserHistory).toHaveBeenCalled()
  })
})
