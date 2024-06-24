import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layouts = () => {
  return (
    <>
    <Header/>
    <div>
        <Outlet/>
    </div>
    </>
)
}

export default Layouts