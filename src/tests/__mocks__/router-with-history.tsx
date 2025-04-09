import React from 'react'
import { Router } from 'react-router-dom'

import type { RouterWithHistoryParams } from './interfaces'

const RouterWithHistory: React.FC<RouterWithHistoryParams> = ({ history, children }) => {
  return (
    <Router location={history.location} navigator={history}>
      {children}
    </Router>
  )
}

export default RouterWithHistory

export function renderRoutesWithHistory(
  history: RouterWithHistoryParams['history'],
  children: RouterWithHistoryParams['children'],
): React.ReactElement {
  return <RouterWithHistory history={history}>{children}</RouterWithHistory>
}
