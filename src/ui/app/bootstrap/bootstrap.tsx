import { createBrowserHistory } from 'history'
import React from 'react'

import { Core } from '@/ui/app/core'

import { BootstrapProps } from './interfaces'

const Bootstrap: React.FC<BootstrapProps> = ({ authToken }) => {
  const history = createBrowserHistory()

  return <Core history={history} authToken={authToken} />
}

export default Bootstrap
