import Ads from '@components/Ads'
import Layout from '@components/Layout'
import gameData from 'data/gameData'
import React from 'react'
import { FaCircleArrowRight } from 'react-icons/fa6'

function PlayTime() {
    return (
        <Layout title="Play Time">
        <div className='flex items-center justify-center pt-5'>
          <Ads id="ad-slot-1" />
        </div>
            <div className="flex flex-col gap-5 mx-auto h-max ls:w-[365px]  pb-[150px]">

                <div className='grid grid-cols-1 gap-4 p-4'>
                    {gameData?.PlayTime?.map((item) => (
                        <a href='/claimnow'>
                            <div key={item} className="cursor-pointer gap-4 bg-white p-2  rounded-2xl">
                                <div className='flex flex-col p-2 border-2 border-solid border-primary4 rounded-2xl mask-border-gradient'>
                                    <div className='flex items-center justify-between  bg-gradient-primary6-fade bg-opacity-10 rounded-2xl'>
                                        <div className='flex justify-center items-center gap-4'>
                                            <img
                                                src={item.url}
                                                className="w-[80px]"
                                                alt="Product"
                                            />
                                            <div className='text-black text-[15px] text-center  font-bold '>{item.name}</div>

                                        </div>
                                        <div className='text-black'>
                                            <FaCircleArrowRight size={19} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>

                    ))}
                </div>
            </div>
        </Layout>
    )
}

export default PlayTime
