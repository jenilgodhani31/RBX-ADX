import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import React from 'react'

function RbxPremium() {
    return (
        <Layout title="Rbx Premium">
        <div className='flex items-center justify-center pt-5'>
          <Ads id="ad-slot-1" />
        </div>
            <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px] pt-10 pb-20">
                <div className='grid grid-cols-1 gap-4 p-4'>
                    {gameData?.RbxPremium?.map((item) => (
                        <a href='/maturitylevel'>
                            <div key={item} className="cursor-pointer p-2">
                                <img
                                    src={item.url}
                                    className={`w-[350px] ${item.id === 1 ? 'pl-3' : ''}`}
                                    alt="Product"
                                />

                            </div>
                        </a>

                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default RbxPremium
