import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

function Success() {
  const route = useRouter()
  function goToCharacterDetails(name, type) {
    route.push({
      pathname: `/tools/characters/${name}`,
      query: { item: name, category: type },
    })
  }
  return (
    <Layout>
              <div className='flex items-center justify-center pt-5'>
          <Ads id="ad-slot-1" />
        </div>
      <div className="flex flex-col gap-7 mx-auto h-max ls:w-[360px]  pb-10">
        <div className="flex items-center justify-center pt-5">
          <img src='/assets/images/Success.png' className='w-[200px]' />
        </div>

        <div className='text-center font-bold text-[19px] px-4 pt-5'>{"We will review it and update within  30 minutes."}</div>

        <div className=' flex justify-center  p-5'>
          <a href='/'>
            <button className="bg-gradient-to-b from-[#C067FF] to-[#8A1BFF] w-[250px] rounded-xl text-white font-bold text-lg py-2.5 px-6  shadow-md hover:opacity-90 transition duration-300">
              Home
            </button>
          </a>
        </div>

        <div className='px-2'>
          <a href="/rbxexclusive">
            <img src="/assets/images/freeBox.webp" className="w-full" />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-6 items-center justify-center p-6 cursor-pointer pt-5">
          <a href="/rebloxTools/clothing">
            <img src="/assets/images/robloxtools/Clothing.webp" className="w-full h-[240px] lg:h-auto" />
          </a>
          <a href="/rebloxTools/animation">
            <img src="/assets/images/robloxtools/Animation.webp" className="w-full " />
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default Success
