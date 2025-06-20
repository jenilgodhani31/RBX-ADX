import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import { useRouter } from 'next/router'
import React from 'react'

function Accessories() {
  const route = useRouter()
  function goToAccessoriesDetails(name, type) {
    route.push({
      pathname: `/rebloxTools/accessories/${name}`,
      query: { item: name, category: type },
    })
  }
  return (
    <Layout>

      <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px]  pb-20">
        <div className='flex items-center justify-center pt-5'>
          <Ads id="ad-slot-1" />
        </div>
        <div className='grid grid-cols-2 gap-2 p-4'>
          {gameData.Accessories?.map((item) => (
            <div key={item} className="cursor-pointer p-2"
              onClick={() => goToAccessoriesDetails(item.name, "Accessories")}>
              <img
                src={item.url}
                className={`w-[150px] h-[200px] `}
                alt="Product"
              />

            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Accessories 
