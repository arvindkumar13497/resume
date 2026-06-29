import { createBrowserRouter } from 'react-router-dom'
import App from './App'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '*',
    element: <div className="not-found">Page not found</div>,
  },
])
