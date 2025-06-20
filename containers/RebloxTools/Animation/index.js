import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

function Animation() {
  const route = useRouter()
  function goToAnimationDetails(name, type) {
    route.push({
      pathname: `/rebloxTools/animation/${name}`,
      query: { item: name, category: type },
    })
  }
  return (
    <Layout>

      <div className="flex flex-col gap-5 mx-auto h-screen ls:w-[360px]  pb-10">
        <div className='flex items-center justify-center pt-5'>
          <Ads id="ad-slot-1" />
        </div>
        <div className='grid grid-cols-1 p-2'>
          {gameData.Animation?.map((item) => (
            <div key={item} className="cursor-pointer  p-2"
              onClick={() => goToAnimationDetails(item.name, "Animation")}>
              <img
                src={item.url}
                alt="Product"
              />

            </div>
          ))}
        </div>



      </div>
    </Layout>
  )
}

export default Animation 
