import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Root() {
  return (
    <div>
      <div>Header AND SIDE</div>
      <Outlet />
    </div>
  )
}
