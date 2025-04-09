import { Route, Routes } from 'react-router-dom'

export const getRoutes = () => (
  <Routes>
    <Route path="/health-check" element={<>true</>} />
    <Route path="*" element={<div>Not Found</div>} />
  </Routes>
)
