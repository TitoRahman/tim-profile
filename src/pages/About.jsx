import React from 'react'
import MemberProfile from './components/MemberProfile'
import { Carousel } from 'flowbite-react'
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
      <div>
        <div className={titleStyle}>
          WE HAVE ACHIEVED
        </div>   
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel slideInterval={10000} >
            <img
              src="https://images.ctfassets.net/hrltx12pl8hq/3Mz6t2p2yHYqZcIM0ic9E2/3b7037fe8871187415500fb9202608f7/Man-Stock-Photos.jpg?fit=fill&w=480&h=270"
              alt="..."
            />
            <img
              src="https://images.ctfassets.net/hrltx12pl8hq/3kr5Ng3EogZMpcWCtYMeqT/668eddf01d66cbd5a338127288f2616f/Business_.jpg?fit=fill&w=480&h=270"
              alt="..."
            />
            <img
              src="https://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg"
              alt="..."
            />
          </Carousel>
        </div>
      </div>
      <div className={titleStyle}>
        BE OUR PARTNER
      </div>
    </div>
  )
}
