import React from 'react'
// STOCK IMAGE : https://as2.ftcdn.net/v2/jpg/02/14/74/61/1000_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg
export default function MemberProfile({
  MemberPhoto = 'https://as2.ftcdn.net/v2/jpg/02/14/74/61/1000_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg',
  MemberAboutMe = 'about me!',
  MemberName = 'My Name!',
  MemberRole = 'My Role!'
}) {
  // const skillTag = {
  //   FrontEnd : 
  // }

  const responsiveSize = "lg:w-80 lg:h-80 sm:w-72 sm:h-72 h-72 w-48"
  return (
    <div className='flex flex-col items-center hover:animate-pulse hover:cursor-pointer'>
      {/* PROFILE IMAGE */}
      <div className={`rounded-full border overflow-hidden items-center flex flex-row mb-3 ${responsiveSize}`}>
        <img alt='Member' src={MemberPhoto} className={` ${responsiveSize} object-cover object-center`}></img>
      </div>
      <div className='font-bold text-2xl'>
        {MemberName.toUpperCase()}
      </div>
      <div className='text-gray-400 text-lg'>
        {MemberRole.toUpperCase()}
      </div>

      <div>
        {MemberAboutMe.toLowerCase()}
      </div>

      <div>
        SKILL
      </div>
    </div>
  )
}
