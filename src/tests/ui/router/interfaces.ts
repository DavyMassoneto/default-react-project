import type { MemoryHistory } from 'history'
import type { RenderResult } from 'vitest-browser-react'

export interface GetRoutesMakeSutProps {
  initialPath?: string
}

export interface GetRoutesMakeSutResult {
  sut: RenderResult
  history: MemoryHistory
}

export interface RouterMakeSutProps {
  initialPath?: string
}

export interface RouterMakeSutResult {
  sut: RenderResult
  history: MemoryHistory
}
