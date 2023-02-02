import React from 'react'
import MemberProfile from './components/MemberProfile'
import { Carousel } from 'flowbite-react'
import {BsFillArrowRightSquareFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import {FaHandshake, FaRunning} from 'react-icons/fa'
import {BsFillChatFill} from 'react-icons/bs'
export default function About() {
  const titleStyle = 'text-white font-bold text-4xl mt-10 pb-1'
  return (
    <div className='bg-main-dark pt-20 text-white flex flex-col gap-5 pb-20'>
      <div>
        <div className={titleStyle}>
          OUR MEMBER
        </div>
        <div className='mt-3 grid lg:grid-cols-3 sm:grid-cols-2 gap-5 '>
          <div className='lg:col-span-1 sm:col-span-3'>
            <MemberProfile 
              MemberName='tito A. R.' 
              MemberRole='Fullstack & Leader' 
              MemberAboutMe='sipaling benar' 
              MemberPhoto={require('../../src/assets/img/member_profile/tito.jpg')}
              ListSkill = {[{
                Name : 'JS'
              }, {
                Name : 'PY'
              },{
                Name : 'SQL'
              },{
                Name : 'API'
              },{
                Name : 'C#'
              }]}  
              />
          </div>
          <MemberProfile 
            MemberName='Arif J. M.' 
            MemberRole='frontend & ui/ux' 
            MemberAboutMe='sipaling designer' 
            MemberPhoto={require('../../src/assets/img/member_profile/arifjagad.JPG')}
            ListSkill = {[{
                Name : 'JS'
              }, {
                Name : 'PHP'
              },{
                Name : 'DART'
              },{
                Name : 'CSS'
              },{
                Name : 'C#'
              }]}  
            />
          <MemberProfile 
            MemberName='Julius J. S.' 
            MemberRole='designer' 
            MemberAboutMe='sipaling gud luking' 
            MemberPhoto={require('../../src/assets/img/member_profile/julius.jpg')}
            ListSkill = {[{
                Name : 'PIXEL ART'
              }, {
                Name : 'SKETCHING'
              },{
                Name : 'FIGMA'
              }]}  
            />
        </div>
      </div>
      <div>
        <div className={titleStyle + ' mb-5'}>
          WE HAVE ACHIEVED
        </div>   
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 mx-20">
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
      <div >
        <div className={titleStyle + ' mb-5'}>
          BE OUR PARTNER
        </div>
        <div className='grid grid-cols-1 gap-2 w-full bg-second-dark content-center justify-items-center py-10'>
          <div className='grid grid-cols-3 w-full gap-10'>
            <div className='flex flex-col gap-2'>
              <FaHandshake size={'5rem'} className='self-center'/>
              <div className='text-xl font-bold'>
                TRUSTED
              </div>
              <div className='text-gray-400'>
                many companies and individual trust our work
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <FaRunning size={'5rem'} className='self-center'/>
              <div className='text-xl font-bold'>
                FAST
              </div>
              <div className='text-gray-400'>
                we work fast and consistent
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <BsFillChatFill size={'5rem'} className='self-center'/>
              <div className='text-xl font-bold'>
                COMMUNICATION
              </div>
              <div className='text-gray-400'>
                we won't ghost you and will always contact you
              </div>
            </div>
          </div>
          <Link className='hover:cursor-pointer mt-10' to={'/contact'}><BsFillArrowRightSquareFill color='white' size={'7rem'}/></Link>
          <Link className='font-bold text-2xl hover:cursor-pointer'  to={'/contact'}>CONTACT US <br/> NOW!</Link>
        </div>
      </div>
    </div>
  )
}
