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

      


      <div class="py-8 px-4 lg:w-1/3">
        <div class="h-full flex items-start">
          <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
           
          </div>
          <div class="flex-grow pl-0">
           
            <p class="leading-relaxed mb-5"><iframe
                    class="video mt-20"
                   src="https://www.youtube.com/embed/JfX7efz0Pao"
                  ></iframe></p>
            <a class="inline-flex items-center">
             
              <span class="flex-grow flex flex-col">
                <span class="title-font1 font-medium text-gray-900">Rk Industries - Sieves</span>
              </span>
            </a>
          </div>
        </div>
      </div>


      <section class="text-gray-600 body-font">
  <div class="container px-5 py-10 mx-auto">
    <div class="flex flex-wrap -m-4 text-center">
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">2.7K</h2>
        <p class="leading-relaxed"> Live Customer</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">10 lakh+</h2>
        <p class="leading-relaxed">Products Delivered</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">4.5</h2>
        <p class="leading-relaxed">Rating on every platform</p>
      </div>
      <div class="p-4 sm:w-1/4 w-1/2">
        <h2 class="title-font font-medium sm:text-4xl text-3xl text-gray-900">50+ </h2>
        <p class="leading-relaxed">Years of experience </p>
      </div>
    </div>
  </div>
</section>

<div class="container1 sm:text-4xl text-3xl font-bold mt-12">
  <p class="p text-sky-600">Reviews</p>
</div>
      <section class="text-gray-600 body-font">
  <div class="container px-5 py-12 mb-10 mx-auto">
    <div class="flex flex-wrap -mx-4 -my-8">
      <div class="py-8 px-4 lg:w-1/3">
        <div class="h-full flex items-start">
          <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
            <span class="font-medium text-lg text-gray-800 title-font leading-none">18</span>
          </div>
          <div class="flex-grow pl-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">Sieves</h2>
            <h1 class="title-font text-xl font-medium text-gray-900 mb-3"></h1>
            <p class="leading-relaxed mb-5">Strong build and good quality product. Job well done. thanx R.K. Industries</p>
            <a class="inline-flex items-center">
              
              <span class="flex-grow flex flex-col pl-3">
                <span class="title-font font-medium text-gray-900">AnjalI anand</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="py-8 px-4 lg:w-1/3">
        <div class="h-full flex items-start">
          <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">2</span>
            <span class="font-medium text-lg text-gray-800 title-font leading-none">Month</span>
          </div>
          <div class="flex-grow pl-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">GI Sieves</h2>
            <h1 class="title-font text-xl font-medium text-gray-900 mb-3"></h1>
            <p class="leading-relaxed mb-5">Just got the Gi Test Sieve for the ramp construction for my factory, and it worked perfectly fine. Product worked very well and the contractor is very impressed from the product and its function. No complaints</p>
            <a class="inline-flex items-center">
             
              <span class="flex-grow flex flex-col pl-3">
                <span class="title-font font-medium text-gray-900">Mani Sofat</span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="py-8 px-4 lg:w-1/3">
        <div class="h-full flex items-start">
          <div class="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span class="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">6</span>
            <span class="font-medium text-lg text-gray-800 title-font leading-none">Month</span>
          </div>
          <div class="flex-grow pl-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">General</h2>
            <h1 class="title-font text-xl font-medium text-gray-900 mb-3"></h1>
            <p class="leading-relaxed mb-5">I am happy from their services and sieves .. for best quality you should try their products</p>
            <a class="inline-flex items-center">
             
              <span class="flex-grow flex flex-col pl-3">
                <span class="title-font font-medium text-gray-900">Pratham Gakhar</span>
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
