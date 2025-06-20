import Ads from '@components/Ads';
import Layout from '@components/Layout'
import React, { useState } from 'react'

function ClaimNow() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleClaim = () => {
    if (username.trim() === '') {
      setError('Please enter a username.');
    } else {
      setError('');
      window.location.href = '/success';
    }
  };

  return (
    <Layout title="Claim Now">
      <div className='flex items-center justify-center pt-5'>
        <Ads id="ad-slot-1" />
      </div>
      <div className="flex flex-col gap-5 mx-auto h-max ls:w-[365px] pt-[50px] pb-[250px]">

        <div className='flex justify-center'>
          <img src='/assets/images/claimnow.png' />
        </div>

        <div className='flex justify-center p-4 pt-6 flex-col'>
          <input
            required
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username..."
            className="rounded-xl h-[45px] w-full p-4 text-black text-[25px] font-bold placeholder:text-black placeholder:text-center placeholder:font-bold placeholder:text-[25px]"
          />
          {error && (
            <span className="text-red-500 text-[15px] mt-3 text-center">
              {error}
            </span>
          )}
        </div>

        <div className='flex justify-center pt-5'>
          <button
            onClick={handleClaim}
            className="bg-gradient-to-b from-[#C067FF] to-[#8A1BFF] w-[250px] rounded-xl text-white font-bold text-lg py-2.5 px-6 shadow-md hover:opacity-90 transition duration-300"
          >
            Claim
          </button>
        </div>

        <div className='flex justify-center pt-2'>
          <a href='/'>
            <button
              className="bg-gradient-to-b from-[#C067FF] to-[#8A1BFF] w-[250px] rounded-xl text-white font-bold text-lg py-2.5 px-6 shadow-md hover:opacity-90 transition duration-300"
            >
              Reset
            </button>
          </a>
        </div>

      </div>
    </Layout>
  )
}

export default ClaimNow
