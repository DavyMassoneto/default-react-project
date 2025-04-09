import React from 'react'

import { Router } from '@/ui/router'

import { CoreProps } from './interfaces'

const Core: React.FC<CoreProps> = ({ history }) => {
  return <Router history={history} />
}

export default Core
