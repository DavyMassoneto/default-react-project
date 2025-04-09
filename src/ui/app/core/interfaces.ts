import type { MemoryHistory, History } from 'history'

export interface CoreProps {
  authToken?: string
  history: History | MemoryHistory
}
