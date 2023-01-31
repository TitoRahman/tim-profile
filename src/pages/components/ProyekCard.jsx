import React from 'react'
import { Link } from 'react-router-dom';

export default function ProyekCard(
    {
        mImage="https://m1.material.io/assets/0B5ZSepuCX1xOMmo2MDlJWjdwQlU/disabled-dark.png", 
        mTag = [
            {
                Name:'Placeholder', 
                LinkTo:'/', 
                TextColor:'text-light-purle', 
                BackgroundColor:'bg-dark-second',
                Border:'border border-light-purle'
            }
        ], 
        mProyekTitle = "Placeholder", 
        mProyekDescription = '---'
    }
    ) {
    const generateTag = () => {
        let listTag = []

        mTag.forEach(e => {
            listTag.push(
                <Link className= {`inline-block ${e.Border} ${e.BackgroundColor} rounded-full px-3 py-2 text-sm font-semibold  mr-2 mb-2 ${e.TextColor}`} to={e.LinkTo}>
                    #{e.Name}
                </Link>
            )
        });

        return listTag
    }

    return (
      <div className='mx-3 my-4'>
          <div className="max-w-xs rounded overflow-hidden shadow-lg bg-zinc-700">
              <img className="w-full" src={mImage} alt="Sunset in the mountains"/>
                <div className="px-4 py-4">
                    <div className="font-bold text-2xl mb-2 text-left text-white">
                        {mProyekTitle}
                    </div>
                    <p className="text-gray-700 text-base text-left text-gray-400 font-medium">
                        {mProyekDescription}
                    </p>
                </div>
                <div className="px-4 pt-4 pb-2 flex">
                    {generateTag()}
                </div>
          </div>
      </div>
    )
}
