import Ads from '@components/Ads'
import Layout from '@components/Layout'
import React from 'react'

function RbxExclusive() {
  return (
    <Layout title="Rbx Exclusive">
              <div className='flex items-center justify-center pt-5'>
          <Ads id="ad-slot-1" />
        </div>
      <div className="flex  flex-col gap-6 px-5 h-screen mx-auto ls:w-[360px] pt-10 pb-10">

        <div className="grid grid-cols-1  items-center justify-center   cursor-pointer pt-10">
          <a href="/rbxexclusive/rbxpackage">
            <img src="/assets/images/rbxExclusive/rbxpackage.webp" className="w-full " />
          </a>

          <a href="/rbxexclusive/rbxpremium">
            <img src="/assets/images/rbxExclusive/rbxpremium.webp" className="w-full p-4" />
          </a>

        </div>


      </div>
    </Layout>
  )
}

export default RbxExclusive
