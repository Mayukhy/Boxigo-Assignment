import React, { useState } from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Person2Icon from '@mui/icons-material/Person2';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ClearIcon from '@mui/icons-material/Clear';
export default function SideBar() {

  //form toggling the mobile menu
  const [mobileMenue, setMobileMenue] = useState(false)

  //Sideba items
  const bardata = [
    { name: 'MY MOVES', icon: <LocalShippingIcon className=' scale-150 border-l-[3px] border-orange-600 pl-1' /> },
    { name: 'MY PROFILE', icon: <Person2Icon className=' scale-150 pl-1' /> },
    { name: 'GET QUOTE', icon: <RequestQuoteIcon className='scale-150 pl-1' /> },
    { name: 'LOGOUT', icon: <ExitToAppIcon className=' scale-150 pl-1' /> }
  ]
  return (
    <>

      {/* for toggling the state of MobileMenu */}
      <div className='bg-transparent backdrop-blur-md rounded-full p-1 border border-orange-600 cursor-pointer mt-2 absolute md:hidden flex right-0 top-0 mx-3 '>
        <MenuOpenIcon onClick={() => setMobileMenue(true)} />
      </div>


      {/* Mobile Sidebar */}
      {mobileMenue && <div style={{ zIndex: 9 }} className=' md:hidden animate-[slideright_0.5s] flex flex-col fixed right-0 backdrop-blur-lg p-3 h-screen w-2/5 pt-1'>

        <div className='bg-transparent backdrop-blur-md rounded-full p-1 border border-orange-600 cursor-pointer mt-2 absolute md:hidden flex right-0 top-0 mx-3 '>
          <ClearIcon onClick={() => setMobileMenue(false)} />
        </div>
        {bardata?.map((data) => (
          <div className=' flex gap-1 my-5 cursor-pointer'>
            {data?.icon}
            <p className=' font-bold text-xs mt-1 ml-2'>{data?.name}</p>

          </div>
        ))}
      </div>}

      {/* Desktop Sidebar */}
      <div className=' md:flex flex-col hidden h-screen w-[180px] pt-1'>
        {bardata?.map((data) => (
          <div className=' flex gap-1 my-5 cursor-pointer'>
            {data?.icon}
            <p className=' font-bold text-xs mt-1 ml-2'>{data?.name}</p>

          </div>
        ))}
      </div>
    </>
  )
}
