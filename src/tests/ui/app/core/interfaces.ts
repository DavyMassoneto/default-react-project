import type { MemoryHistory, History } from 'history'
import { render } from 'vitest-browser-react'

export interface MakeSutProps {
  history: History | MemoryHistory
}

export interface MakeSutResult {
  sut: ReturnType<typeof render>
}
