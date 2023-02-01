import React from 'react'
import MemberProfile from './components/MemberProfile'

export default function About() {
  const titleStyle = 'text-white font-bold text-5xl mt-10 pb-1'
  return (
    <div className='bg-main-dark pt-20 text-white flex flex-col gap-5 pb-96'>
      <div>
        <div className={titleStyle}>
          OUR MEMBER
        </div>
        <div className='mt-3 grid lg:grid-cols-3 sm:grid-cols-2 gap-5 '>
          <div className='lg:col-span-1 sm:col-span-3'>
            <MemberProfile/>
          </div>
          <MemberProfile/>
          <MemberProfile/>
        </div>
      </div>
      <div className={titleStyle}>
        WE HAVE ACHIEVED
      </div>
      <div className={titleStyle}>
        BE OUR PARTNER
      </div>
    </div>
  )
}
