import React from "react";

const bankdetails = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div >
            <img
              class="payment object-cover object-center rounded "
              alt="hero"
              src="/payment.jpeg"
            />
          </div>
          <div class="relative my-20 mx-10 w-200 overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100">
              <thead class="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Bank Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    State Bank Of India
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                  >
                    IFSC Code
                  </th>
                  <td class="px-6 py-4">SBIN0000654</td>
                </tr>
                <tr class="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                  >
                   Account No.
                  </th>
                  <td class="px-6 py-4">2055991618</td>
                </tr>
                <tr class="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                  >
                    Address
                  </th>
                  <td class="px-6 py-4">Madhuban Colony, Near Tata Motors, Jagadhri, Yamunanagar, Haryana, 135003</td>
                </tr>
                <tr class="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                  >
                    Nearest Transport
                  </th>
                  <td class="px-6 py-4">Janta Transport</td>
                </tr>
                
                
              </tbody>
            </table>
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default bankdetails;
