import React from 'react'
// STOCK IMAGE : https://as2.ftcdn.net/v2/jpg/02/14/74/61/1000_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg
export default function MemberProfile({
  MemberPhoto = 'https://as2.ftcdn.net/v2/jpg/02/14/74/61/1000_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg',
  MemberAboutMe = 'about me!',
  MemberName = 'My Name!',
  MemberRole = 'My Role!',
  ListSkill = [{
    Name : 'Placeholder',
    Color : 'white',
    Background : 'main-dark'
  }]
}) {
  
  const roleTag = () => {
    let styleOutput = []
    ListSkill.forEach(e => {
      let styling = `inline-block border-${e.Color} border-2 bg-${e.Background} rounded-full px-3 py-1 mt-2 text-sm font-semibold  mr-2 mb-2 text-${e.Color}`
      styleOutput.push(
        <div className= {styling} >{e.Name}</div>
      )
    });
    return styleOutput
  }

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

      <div className='flex flex-cols content-center items-center'>
        {roleTag()}
      </div>
    </div>
  )
}
