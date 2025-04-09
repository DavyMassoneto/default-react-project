import type { MemoryHistory } from 'history'
import type { ReactNode } from 'react'

export interface RouterWithHistoryParams {
  history: MemoryHistory
  children: ReactNode
}
