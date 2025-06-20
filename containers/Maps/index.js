import Layout from '@components/Layout'
import React from 'react'
import gameData from 'data/gameData'
import { FaCircleArrowRight } from "react-icons/fa6";
import { useRouter } from 'next/router';
import Ads from '@components/Ads';
function Maps() {
    const router = useRouter()

    function getMapDetails(name, url, type) {
        router.push({
            pathname: `/maps/${name}`,
            query: { item: name, category: type, url: url },
        })
    }
    return (
        <Layout>
        <div className='flex items-center justify-center pt-5'>
          <Ads id="ad-slot-1" />
        </div>
            <div className="flex flex-col gap-5 mx-auto h-max ls:w-[360px]  pb-10">
                <div className='grid  gap-4 p-4'>
                    {gameData.Maps.map((item) => (
                        <div key={item} className="bg-white rounded-xl cursor-pointer gap-4 p-4"
                            onClick={() => getMapDetails(item.name, item.url, 'Maps')}
                        >
                            <img
                                src={item.url}
                                className="rounded-lg"
                                alt="Product"
                            />
                            <div className='flex justify-between text-black pt-2 font-bold'>
                                <div>{item.name}</div>
                                <FaCircleArrowRight size={19} />
                            </div>
                        </div>
                    ))}
                </div>



            </div>
        </Layout>
    )
}

export default Maps
