import { render } from 'vitest-browser-react'

export interface MakeSutProps {
  sut: ReturnType<typeof render>
}
