import Image from "next/image";

export default function Order() {
  return (
    <div className="font-[sans-serif] bg-white">
      <Image src="/vector.png" alt="" width={50} height={50} />
      <div className="flex max-sm:flex-col gap-6 max-lg:gap-4 h-full">
        <div className="mx-32 max-w-[900px] w-full h-max rounded-md px-8 py-8 sticky top-0">
          <h2 className="text-lg font-bold text-gray-800">
            How would you like to get your order?
          </h2>
          <h3>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies,
            purus lectus malesuada libero, sit amet commodo magna eros quis
            urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
            Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Proin pharetra nonummy pede.
            Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet
            nonummy augue. Suspendisse dui purus, scelerisque at, vulputate
            vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis
            eleifend. Ut nonummy.
          </h3>
          <form className="mt-8">
            <div>
            <button
                  className="px-6 py-5 w-full text-lg mb-6 tracking-wide bg-gray-100 text-black border-black rounded-full"
                >Deliver It</button>
              <h3 className="text-base text-gray-800 mb-4">Enter Your name and address</h3>
              <div className="grid gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>

                <div>
                  <input
                    type="address"
                    placeholder="Address Line 1"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>

                <div>
                  <input
                    type="add"
                    placeholder="Address Line 2"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
                <div>
                  <input
                    type="add"
                    placeholder="Address Line 3"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
                <div className="flex gap-4">
                  <input
                    type="add"
                    placeholder="Postal Code"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                  <input
                    type="add"
                    placeholder="Locality"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>


              </div>

              <div className="flex gap-4 mt-5">
                  <input
                    type="List"
                    placeholder="State/Territory"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                  <input
                    type="list"
                    placeholder="India"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
                <div>
                <input id="Save this address to my Profile" name="save" type="checkbox" className="h-4 w-4 shrink-0 border-gray-300 rounded" />
                Save this address to my Profile
                </div>
                <div>
                <input id="preffered" name="save" type="checkbox" className="h-4 w-4 shrink-0 border-gray-300 rounded" />
                Make this my preffered address
                </div>

              
            </div>

            <div className="mt-8">
              <h3 className="text-base text-gray-800 mb-4">Whats your contact information?</h3>
              <div className="grid gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="Email"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600"
                  />
                </div>
                
              </div>

              <div>
            <button
                  className="px-6 py-4 mt-4 w-full text-lg mb-6 tracking-wide bg-gray-100 text-black border-black rounded-full"
                >Continue</button>
                </div>
            </div>
          </form>
        </div>

        <div className="bg-white text-black sm:h-screen sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
          <div className="relative h-full">
            <div className="px-4 py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-52 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-100 rounded-md">
                    <Image
                      src="/m1.png"
                      alt=""
                      width={600}
                      height={600}
                      className="w-full object-contain"
                    />
                  </div>
                  <div className="w-full">
                    <h3 className="text-base">Nike DRI-FIT</h3>
                    <ul className="text-xs space-y-2 mt-2">
                      <li className="flex flex-wrap gap-4">
                        Size <span className="ml-auto">37</span>
                      </li>
                      <li className="flex flex-wrap gap-4">
                        Quantity <span className="ml-auto">2</span>
                      </li>
                      <li className="flex flex-wrap gap-4">
                        Total Price <span className="ml-auto">$40</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-52 h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 bg-gray-100 rounded-md">
                    <Image
                      src="/sh2.png"
                      alt=""
                      width={200}
                      height={200}
                      className="w-full object-contain"
                    />
                  </div>
                  <div className="w-full">
                    <h3 className="text-base">Nike Air Max</h3>
                    <ul className="text-xs space-y-2 mt-2">
                      <li>
                        Size <span className="float-right">37</span>
                      </li>
                      <li>
                        Quantity <span className="float-right">2</span>
                      </li>
                      <li>
                        Total Price <span className="float-right">$40</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:absolute md:left-0 md:bottom-0 bg-white w-full p-4">
              <h4 className="flex flex-wrap gap-4 text-base">
                Total <span className="ml-auto">$80.00</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
