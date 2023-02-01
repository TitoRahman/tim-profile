import React from 'react'
// STOCK IMAGE : https://as2.ftcdn.net/v2/jpg/02/14/74/61/1000_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg
export default function MemberProfile({
  memberPhotos = 'https://as2.ftcdn.net/v2/jpg/02/14/74/61/1000_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg'
}) {
  // const skillTag = {
  //   FrontEnd : 
  // }

  const responsiveSize = "lg:w-80 lg:h-80 sm:w-72 sm:h-72 h-72 w-48"
  return (
    <div className='flex flex-col items-center hover:animate-pulse hover:cursor-pointer'>
      <div className={`rounded-full border overflow-hidden items-center flex flex-row mb-10 ${responsiveSize}`}>
        <img alt='Member' src={memberPhotos} className={` ${responsiveSize} object-cover object-center`}></img>
      </div>
      <div>
        ROLE
      </div>
      <div>
        ABOUT  ME
      </div>
      
      <div>
        SKILL
      </div>
    </div>
  )
}
