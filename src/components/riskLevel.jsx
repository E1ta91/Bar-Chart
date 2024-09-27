import React from 'react'

const RiskLevel = () => {
  return (
    <div className='space-y-2 pb-14  2xl-custom:pb-28 md:space-y-3 lg:pb-6 xl:pb-6 md:pb-12 '>

          <div className='flex space-x-4'>
            <div className='relative flex '>
              <div className='border-l-2 border-[#614283]  2xl-custom:h-[237px] h-[178px] md:h-[43px] lg:h-[70px] xl:h-[124px] arrow'></div>
            </div>
            <div className='flex flex-col justify-center'>
              <h1 className='font-bold  2xl-custom:text-[25px]    text-[11px]'>High risk</h1>
              <p className=' 2xl-custom:text-[25px]    text-[11px]'>
                <span className='whitespace-nowrap'>Strong need for innovation</span>
                <br />
                <span></span>
              </p>
            </div>

          </div>

          <div className='flex space-x-4'>
            <div className='relative flex '>
              <div className='border-l-2 border-[#614283] 2xl-custom:h-[237px] h-[178px] md:h-[43px] lg:h-[70px] xl:h-[124px] arrow'></div>
            </div>
            <div className='flex flex-col justify-center'>
              <h1 className='font-bold  2xl-custom:text-[25px]    text-[11px]'>Medium risk</h1>
              <p className=' 2xl-custom:text-[25px]    text-[11px]'>
                <span className='whitespace-nowrap'> Need for innovation</span>
              </p>
            </div>
          </div>

          <div className='flex space-x-4'>
            <div className='relative flex '>
              <div className='border-l-2 border-[#614283] 2xl-custom:h-[237px] h-[178px] md:h-[45px] lg:h-[70px] xl:h-[124px] arrow'></div>
            </div>
            <div className='flex flex-col justify-center'>
              <h1 className='font-bold  2xl-custom:text-[25px]    text-[11px]'>Low risk</h1>
              <p className=' 2xl-custom:text-[25px]    text-[11px]'>
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