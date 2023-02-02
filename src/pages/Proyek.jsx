import React from 'react'
import ProyekCard from './components/ProyekCard'

export default function Proyek() {
  const titleStyle = 'text-white font-bold text-5xl mt-10 pb-1'
  const labelStyle = 'text-gray-400 text-bg'
  const proyekData = [{
    mImage: 'ss',
    mTag:{
      Name:'Placeholder', 
      LinkTo:'/', 
      TextColor:'text-light-purle', 
      BackgroundColor:'second-dark',
      Border:'border border-light-purle'
    }, 
    mProyekTitle:'Genius',
    mProyekDescription:''
  }]
  const generateCard = (n) => {
    if (n === 0){
      return <>TIDAK ADA PROJECT</>
    }
    let cardList = []
    for (let i = 0; i< n ;i++){
      cardList.push(<ProyekCard/>)
    } return cardList
  }

  const cardContainer = (n) => {
    let cardContainerStyle = 'grid items-center overflow-auto'
    if (n >= 4){
      cardContainerStyle += ' lg:grid-cols-4 sm:grid-cols-2'
    } else if (n === 3) {
      cardContainerStyle += ' lg:grid-cols-3 sm:grid-cols-2'
    } else if (n === 2) {
      cardContainerStyle += ' grid-cols-2'
    } else if (n === 1) {
      cardContainerStyle += ' grid-cols-1'
    }
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
        {cardContainer(1)}
      </div>
      <div>
        <div className={titleStyle}>
          CURRENT
        </div>
        <div className={labelStyle}>
          a work-in-progress project that we are currently working on!
        </div>
        {cardContainer(2)}
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


