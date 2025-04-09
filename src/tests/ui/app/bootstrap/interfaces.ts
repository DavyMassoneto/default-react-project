import { render } from 'vitest-browser-react'

export interface MakeSutResult {
  sut: ReturnType<typeof render>
}
