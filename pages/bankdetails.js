import React from "react";

const bankdetails = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div >
            <img
              className="payment object-cover object-center rounded "
              alt="hero"
              src="/payment.jpeg"
            />
          </div>
          <div className="relative my-20 mx-10 w-200 overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
              <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Bank Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    State Bank Of India
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                  >
                    IFSC Code
                  </th>
                  <td className="px-6 py-4">SBIN0000654</td>
                </tr>
                <tr className="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                  >
                   Account No.
                  </th>
                  <td className="px-6 py-4">2055991618</td>
                </tr>
                <tr className="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                  >
                    Address
                  </th>
                  <td className="px-6 py-4">Madhuban Colony, Near Tata Motors, Jagadhri, Yamunanagar, Haryana, 135003</td>
                </tr>
                <tr className="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
                  >
                    Nearest Transport
                  </th>
                  <td className="px-6 py-4">Janta Transport</td>
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
