import React from 'react'

const RiskLevel = () => {
  return (
    <div className='space-y-3 pb-6 '>
          <div className='flex space-x-4'>
            <div className='relative flex '>
              <div className='border-l-2 border-[#614283] h-[89px] arrow'></div>
            </div>
            <div className='flex flex-col justify-center'>
              <h1 className='font-bold text-[11px]'>High risk</h1>
              <p className='text-[11px]'>
                <span className='whitespace-nowrap'>Strong need for</span>
                <br />
                <span>innovation</span>
              </p>
            </div>

          </div>

          <div className='flex space-x-5'>
            <div className='relative flex '>
              <div className='border-l-2 border-[#614283] h-[89px] arrow'></div>
            </div>
            <div className='flex flex-col justify-center'>
              <h1 className='font-bold text-[11px]'>Medium risk</h1>
              <p className='text-[11px]'>
                <span className='whitespace-nowrap'> Need for innovation</span>
              </p>
            </div>
          </div>

          <div className='flex space-x-5'>
            <div className='relative flex '>
              <div className='border-l-2 border-[#614283] h-[89px] arrow'></div>
            </div>
            <div className='flex flex-col justify-center'>
              <h1 className='font-bold text-[11px]'>Low risk</h1>
              <p className='text-[11px]'>
                <span className='whitespace-nowrap'>Low need for</span>
                <br />
                <span>innovation</span>
              </p>
            </div>
          </div>

        </div>
  )
}

export default RiskLevel