import Ads from '@components/Ads'
import Layout from '@components/Layout'
import React, { Fragment } from 'react'

function RebloxTools() {
  return (
    <Layout title="Robox Tools">

      <div className=" p-8 pb-[200px]">
        <div className='flex items-center justify-center pt-5'>
          <Ads id="ad-slot-1" />
        </div>

        <div className="grid grid-cols-2 gap-6 items-center justify-center   cursor-pointer pt-5">
          <a href="/rebloxTools/clothing">
            <img src="/assets/images/robloxtools/Clothing.webp" className="w-full h-[210px]" />
          </a>

          <a href="/rebloxTools/heads">
            <img src="/assets/images/robloxtools/Heads.webp" className="w-full h-[210px]" />
          </a>

          <a href="/rebloxTools/accessories">
            <img src="/assets/images/robloxtools/accressories.webp" className="w-full h-[210px]" />
          </a>
          <a href="/rebloxTools/animation">
            <img src="/assets/images/robloxtools/Animation.webp" className="w-full h-[210px]" />
          </a>
        </div>


      </div>
    </Layout>
  )
}

export default RebloxTools
