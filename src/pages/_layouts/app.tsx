import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <>
      {/* <h1 className="text-3xl font-bold text-emerald-500">App Layout</h1> */}

      <Outlet />
    </>
  )
}