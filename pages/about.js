import React from 'react'
import Image from 'next/image'
const about = () => {
  return (
    <div><section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">ABOUT RK INDUSTRIES</h1>
      <div className="flex flex-wrap -m-4">
        
        <div className="p-4 w-full">
          <div className="h-full bg-gray-100 p-8 rounded">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
      <h1 className="sm:text-4xl text-4xl font-medium title-font mb-2   text-gray-500">R.k Industries</h1>
      <p className="lg:w-1/2 w-full leading-relaxed   bg-gray-100 text-gray-500">Established in this industry in the year 2017, "R.K.Industries" is one of a well reputable firm in this product sector. We are engaged as a Manufacturer, Trader and Supplier of Heating Mantle, Testing Sieves, Weighing Scale & Grain Sample Divider.</p>
      
    </div>
    <h1 className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image className='mx-4' style={{borderRadius:"50% 50%"}} width={70} height={40} src="/Rk_LOGO.png" alt="ssjj"/>
              <span className="ml-3 text-xl">RK INDUSTRIES</span>
             </h1>
          </div>
        </div>
      </div>
    </div>
  </section></div>
  )
}

export default about