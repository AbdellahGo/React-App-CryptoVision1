import React, { useRef } from 'react'
import { SideBar } from '../conponents'
import { Outlet } from 'react-router-dom'
import Footer from '../conponents/Footer'

const Root = () => {
  const btnControl = useRef()
  const sidebar = useRef()
  const contentEle = useRef()

  const handelClick = () => {
    sidebar.current?.classList.toggle('active')
    contentEle.current?.classList.toggle('active')
  }
  return (
    <div className='wrapper row mx-0 align-items-stretch justify-content-end'>
      <SideBar btnControl={btnControl} sidebar={sidebar} handelClick={handelClick} />
      <div className='content d-flex flex-column justify-content-between col col-lg-9 col-md-8 pt-5' ref={contentEle}>
        <div className='mb-4'>
          <Outlet/>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default Root