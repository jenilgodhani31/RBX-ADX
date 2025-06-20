import Ads from '@components/Ads'
import Layout from '@components/Layout'
import React from 'react'
import { FaCircleArrowRight } from 'react-icons/fa6'

function MaturityLevel() {
    const data = ["Beginner", "Intermediate", "Advanced", "Professional"]
    return (
        <Layout title="Level">
        <div className='flex items-center justify-center pt-5'>
          <Ads id="ad-slot-1" />
        </div>
            <div className="flex flex-col gap-5 mx-auto h-max ls:w-[365px]  pb-[250px]">

                <div className='grid grid-cols-1 gap-4 p-4'>
                    {data?.map((item) => (
                        <a href='/rbxcount'>
                            <div key={item} className="cursor-pointer gap-4 bg-white p-2  rounded-2xl"
                            >
                                <div className='flex flex-col p-2 border-2 border-solid border-primary4 rounded-xl'>
                                    <div className='flex items-center justify-between  bg-gradient-primary6-fade p-4 bg-opacity-10 rounded-xl'>
                                        <div className='flex justify-center items-center gap-4'>

                                            <div className='text-black text-[18px] text-center  font-bold '>{item}</div>

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

export default MaturityLevel
