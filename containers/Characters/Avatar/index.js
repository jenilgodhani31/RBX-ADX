import Ads from '@components/Ads';
import Layout from '@components/Layout';
import gameData from 'data/gameData';
import { useRouter } from 'next/router';
import React from 'react';

function Avatar() {
    const router = useRouter();

    // 👇 Adjust this if gameData is an object, not an array
    const avatarData = gameData?.Characters?.find((item) => item.name === 'Avatar');

    function goToProductsDetails(name, url, category) {
        router.push({
            pathname: `/rebloxTools/clothing/${category}/${name}`,
            query: { item: name, category: category, url: url },
        });
    }

    return (
        <Layout>
            <div className='flex items-center justify-center pt-5'>
                <Ads id="ad-slot-1" />
            </div>
            <div className='grid grid-cols-2 gap-4 p-4'>
                {avatarData?.subItems?.map((item) => (
                    <div
                        key={item.id}
                        className="cursor-pointer gap-4 bg-white p-2 rounded-2xl"
                        onClick={() => goToProductsDetails(item.name, item.url, 'Avatar')}
                    >
                        <div className='p-2 border-2 border-solid h-full border-primary4 rounded-2xl'>
                            <div className='bg-top-to-bottom-soft h-ful bg-opacity-20 rounded-2xl'>
                                <img
                                    src={item.url}
                                    className="h-[100px] w-full object-contain "
                                    alt={item.name}
                                />
                                <div className='text-black text-center text-[15px] font-bold p-2 pb-4'>{item.name}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
}

export default Avatar;
