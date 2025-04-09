import { useLayoutEffect, useState } from 'react'
import { Router as RouterDom } from 'react-router-dom'

import { getRoutes } from './get-routes'
import { RouterProps } from './interfaces'

const Router: React.FC<RouterProps> = ({ history, ...props }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  })

  useLayoutEffect(() => history.listen(setState), [history])

  return (
    <RouterDom
      {...props}
      basename="backoffice/treinamento-front"
      location={history.location}
      navigationType={state.action}
      navigator={history}
    >
      {getRoutes()}
    </RouterDom>
  )
}

export default Router
