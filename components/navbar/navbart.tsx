import React from 'react'
import Logo from './_components/logo'
import { Menu } from './_components/menu'
import ActionButtton from './_components/action-buttons'

const Navbar = () => {

  return (
    <div className={`flex items-center justify-between  bg-white h-14 sticky top-0 z-50 border-b border-gray-200  space-x-10 `}>
      <div className='flex items-center justify-center'>
        <Logo/>
        <Menu/>

      </div>
        <ActionButtton/>
    </div>
  )
}

export default Navbar