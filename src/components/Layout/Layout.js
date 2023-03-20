import React from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from '../Sidebar/Sidebar'
import './Layout.scss'

export const Layout = () => {
  return (
    <div className='layout'>
      <Sidebar />
      <div className='page'>
        <span className='tags top-tags'>
          <span className='tag-html'>&lt;html&gt;</span>
          <br />
          &lt;body&gt;
        </span>

        <Outlet />

        <span className='tags bottom-tags'>
          &lt;body&gt;
          <br />
          <span className='tag-html'>&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}
