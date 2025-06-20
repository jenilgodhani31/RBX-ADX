import Ads from '@components/Ads';
import Layout from '@components/Layout';
import gameData from 'data/gameData';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';

// Function to get data from any category
const getItemData = (category, item) => {
  return gameData[category]?.find((data) => data.name === item);
};

function Details() {
  const router = useRouter();
  const { item, category, url } = router.query;

  if (!router.isReady) return <p>Loading...</p>;


  const data = getItemData(category, item);

  function goToProductsDetails(name, img, type) {
    router.push({
      pathname: `/rebloxTools/clothing/${type}/${name}`,
      query: { item: name, category: type, url: img },
    })
  }

  return (
    <Layout  >

      <div className='flex items-center justify-center pt-5'>
        <Ads id="ad-slot-1" />
      </div>
      <div className='grid grid-cols-2 gap-4  p-6'>

        {data?.subItems?.map((item) => (
          <div key={item} className="cursor-pointer gap-4 bg-white p-2  rounded-2xl"
            onClick={() => goToProductsDetails(item.name, item.url, item.name)}
          >
            <div className='p-2 border-2 border-solid h-full border-primary4 rounded-2xl'>
              <div className='bg-top-to-bottom-soft h-full bg-opacity-20 rounded-2xl'>
                <img
                  src={item.url}
                  className="h-[100px] w-full object-contain"
                  alt="Product"
                />
                <div className='text-black text-center text-[14px] font-bold  p-2 pb-4'>{item.name}</div>
              </div>
            </div>


          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Details;
