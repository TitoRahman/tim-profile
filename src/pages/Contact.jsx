import React from 'react'
import {Button, Textarea, TextInput} from 'flowbite-react'
import {AiOutlineMail, AiFillGithub, AiFillPhone}  from 'react-icons/ai'
import {FaFacebookF, FaInstagram} from 'react-icons/fa'
export default function Contact() {
  return (
    <div className='bg-gradient-to-b from-main-dark to-second-dark pb-96 pt-40 text-white lg:text-left px-20 sm:text-center'>
      <div className='text-4xl font-bold'>
        Contact Us...
      </div>
      <div className='pt-3 lg:w-2/4 '>
      Contact us for a trustworthy partnership. Our team delivers exceptional results and top-notch customer service. Fill out the form below to learn more and hear from us soon!
      </div>
      <div className='flex lg:flex-row flex-col justify-between gap-5 '>
        <div className='border border-white border-4 p-5 basis-96 rounded-xl mt-8 lg:w-2/4'>
          <form className='flex flex-col gap-5 text-left text-xl'>
            <div className='flex justify-between gap-5 flex-col lg:flex-row'>
              <div className='grow'>
                <label>First</label>
                <TextInput></TextInput>
              </div>
                
              <div className='grow'>
                <label>Last</label>
                <TextInput></TextInput>
              </div>
            </div>
            <div >
              <label>Email</label>
              <TextInput className='basis-2/4'></TextInput>
            </div>
            <div >
              <label>Subject</label>
              <TextInput className='basis-2/4'></TextInput>
            </div>
            <div >
              <label>Message</label>
              <Textarea className='basis-2/4'></Textarea>
            </div>
            <Button className='w-40 self-end'>SEND!</Button>
          </form>
        </div>
        <div className=' p-5 rounded-xl mt-8 basis-1/4 lg:w-2/4 grow gap-5 flex flex-col'>
          <div className='gap-2 flex flex-col lg:items-start items-center '>
            <div className='flex lg:items-start items-center gap-2 text-[1.2rem] font-medium justify-between'>
              <AiOutlineMail size={'3rem'} className='border border-2 p-2 rounded-full'/> siiizah@speedwagon.co.id
            </div>
          </div>
          <div className='gap-2 flex flex-col lg:items-start items-center '>
            <div className='flex lg:items-start items-center gap-2 text-[1.2rem] font-medium justify-between'>
              <AiFillGithub size={'3rem'} className='border border-2 p-2 rounded-full'/> speedwagon
            </div>
          </div>
          <div className='gap-2 flex flex-col lg:items-start items-center '>
            <div className='flex lg:items-start items-center gap-2 text-[1.2rem] font-medium justify-between'>
              <FaFacebookF size={'3rem'} className='border border-2 p-2 rounded-full'/> SpeedwagonOfficial
            </div>
          </div>
          <div className='gap-2 flex flex-col lg:items-start items-center '>
            <div className='flex lg:items-start items-center gap-2 text-[1.2rem] font-medium justify-between'>
              <FaInstagram size={'3rem'} className='border border-2 p-2 rounded-full'/> SpeedwagonOfficial
            </div>
          </div><div className='gap-2 flex flex-col lg:items-start items-center '>
            <div className='flex lg:items-start items-center gap-2 text-[1.2rem] font-medium justify-between'>
              <AiFillPhone size={'3rem'} className='border border-2 p-2 rounded-full'/> 0692-423-486
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
