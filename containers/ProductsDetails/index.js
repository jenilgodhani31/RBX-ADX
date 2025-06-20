import Ads from '@components/Ads';
import Layout from '@components/Layout';
import gameData from 'data/gameData';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';

// Function to get data from any category
const getItemData = (category, item) => {
  return gameData[category]?.find((data) => data.name === item);
};

function ProductsDetails() {
  const router = useRouter();
  const { item, category, url } = router.query;

  if (!router.isReady) return <p>Loading...</p>;
  console.log("item", item)
  console.log("category", category)

  const data = getItemData(category, item);



  return (
    <Layout  className="text-[18px] ">
              <div className='flex items-center justify-center pt-5'>
          <Ads id="ad-slot-1" />
        </div>
      <div className="flex flex-col gap-5 mx-auto h-max ls:w-[365px] pt-[50px] pb-[140px]">

        <div className="flex items-center justify-center px-5">
          {data ? (
            <div>
              <img src={data.url} alt={data.name} className=" max-w-full" />
            </div>
          ) : (
            <div>
              <img src={url} className=" max-w-full" />
            </div>
          )}
        </div>

        <div className='flex items-center justify-center pb-5 p-5 w-full pt-10'>

          <div className=' flex justify-center  '>
            <a href='/level'>
              <button className="bg-gradient-to-b from-[#C067FF] to-[#8A1BFF] w-[250px] rounded-xl text-white font-bold text-lg py-2.5 px-6  shadow-md hover:opacity-90 transition duration-300">
                Activate Now
              </button>

            </a>
          </div>

        </div>
      </div>
    </Layout>
  );
}

export default ProductsDetails;
