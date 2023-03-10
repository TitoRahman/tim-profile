import React from 'react'
import ProyekCard from './components/ProyekCard'

export default function Proyek() {
  const titleStyle = 'text-white font-bold text-5xl mt-10 pb-1'
  const labelStyle = 'text-gray-400 text-bg'
  const proyekData = [{
    mImage: 'ss',
    mTag:[{
      Name:'Kotlin', 
      LinkTo:'/', 
      TextColor:'color-indigo-800', //Color-[Nama Warna]-[Ketebalan] 
      BackgroundColor:'second-dark',
      Border:'border color-indigo-800' 
    }], 
    mProyekTitle:'Genius',
    mProyekDescription:'Aplikasi mobile'
  },{
    mImage: 'ss',
    mTag:[{
      Name:'Javascript', 
      LinkTo:'/', 
      TextColor:'color-Amber-300', //Color-[Nama Warna]-[Ketebalan] 
      BackgroundColor:'second-dark',
      Border:'border color-Amber-300' 
    },{
      Name:'CSS', 
      LinkTo:'/', 
      TextColor:'color-Purple-700', //Color-[Nama Warna]-[Ketebalan] 
      BackgroundColor:'second-dark',
      Border:'border color-Purple-700' 
    },{
      Name:'HTML', 
      LinkTo:'/', 
      TextColor:'color-red-500', //Color-[Nama Warna]-[Ketebalan] 
      BackgroundColor:'second-dark',
      Border:'border color-red-500' 
    }], 
    mProyekTitle:'tim-profile',
    mProyekDescription:'Website'
  },
  {
    mImage: 'ss',
    mTag:[{
      Name:'Javascript', 
      LinkTo:'/', 
      TextColor:'color-Amber-300', //Color-[Nama Warna]-[Ketebalan] 
      BackgroundColor:'second-dark',
      Border:'border color-Amber-300' 
    },{
      Name:'CSS', 
      LinkTo:'/', 
      TextColor:'color-Purple-700', //Color-[Nama Warna]-[Ketebalan] 
      BackgroundColor:'second-dark',
      Border:'border color-Purple-700' 
    },
    {
      Name:'HTML', 
      LinkTo:'/', 
      TextColor:'color-red-500', //Color-[Nama Warna]-[Ketebalan] 
      BackgroundColor:'second-dark',
      Border:'border color-red-500' 
    }
    ], 
    mProyekTitle:'e-tiket-bus-tailwind',
    mProyekDescription:'Website'
  }
]
  const generateCard = (n) => {
    let cardList = []
    proyekData.forEach((e, index) => {
        if(index < n) {
          cardList.push(
            <ProyekCard
              mProyekDescription={e.mProyekDescription}
              mProyekTitle={e.mProyekTitle}
            />
            )
        }
    })
    return cardList
  }

  const cardContainer = (n) => {
    let cardContainerStyle = 'grid grid-cols-3 w-full text-center items-center overflow-auto'
    return <div className={cardContainerStyle}> {generateCard(n)} </div>
  }
  return (
    <div className= 'flex flex-col text-center bg-gradient-to-b from-main-dark to-second-dark pb-96 pt-20 px-20 items-center'>
      <div>
        <div className={titleStyle}>
          RECENT
        </div>
        <div className={labelStyle}>
          our most recent project that we created!
        </div>
        {cardContainer(2)}
      </div>
      <div>
        <div className={titleStyle}>
          CURRENT
        </div>
        <div className={labelStyle}>
          a work-in-progress project that we are currently working on!
        </div>
        {cardContainer(1)}
      </div>
      <div>
        <div className={titleStyle}>
          ALL
        </div>
        <div className={labelStyle}>
          all the project that we have created
        </div>
        {cardContainer(4)}
      </div>
    </div>
  )
}


