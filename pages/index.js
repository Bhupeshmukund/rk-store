import Head from "next/head";
import Navbar from "@/components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>RK - Home</title>
        <meta name="description" content="Rk Industrys" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      


      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
           
          </div>
          <div className="flex-grow pl-0">
           
            <p className="leading-relaxed mb-5"><iframe
                    className="video mt-20"
                   src="https://www.youtube.com/embed/JfX7efz0Pao"
                  ></iframe></p>
            <a className="inline-flex items-center">
             
              <span className="flex-grow flex flex-col">
                <span className="title-font1 font-medium text-gray-900">Rk Industries - Sieves</span>
              </span>
            </a>
          </div>
        </div>
      </div>


      <section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
        <p className="leading-relaxed"> Live Customer</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">10 lakh+</h2>
        <p className="leading-relaxed">Products Delivered</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">4.5</h2>
        <p className="leading-relaxed">Rating on every platform</p>
      </div>
      <div className="p-4 sm:w-1/4 w-1/2">
        <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">50+ </h2>
        <p className="leading-relaxed">Years of experience </p>
      </div>
    </div>
  </div>
</section>

<div className="container1 sm:text-4xl text-3xl font-bold mt-12">
  <p className="p text-sky-600">Reviews</p>
</div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-12 mb-10 mx-auto">
    <div className="flex flex-wrap -mx-4 -my-8">
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">18</span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">Sieves</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3"></h1>
            <p className="leading-relaxed mb-5">Strong build and good quality product. Job well done. thanx R.K. Industries</p>
            <a className="inline-flex items-center">
              
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900">AnjalI anand</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">2</span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">Month</span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">GI Sieves</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3"></h1>
            <p className="leading-relaxed mb-5">Just got the Gi Test Sieve for the ramp construction for my factory, and it worked perfectly fine. Product worked very well and the contractor is very impressed from the product and its function. No complaints</p>
            <a className="inline-flex items-center">
             
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900">Mani Sofat</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">6</span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">Month</span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">General</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3"></h1>
            <p className="leading-relaxed mb-5">I am happy from their services and sieves .. for best quality you should try their products</p>
            <a className="inline-flex items-center">
             
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900">Pratham Gakhar</span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
