import Image from "next/image";

export default function RegisterForm() {
  return (
    <div className="bg-gray-50 font-[sans-serif]">
      <div className="flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full text-center justify-center">
          
            <Image
              src="/vector.png"
              alt="logo"
              width={150} height={150}
            />
          <h4 className="text-gray-800 text-base font-semibold mb-6">
            Sign up into your account
          </h4>
        </div>

        <form>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <input
                name="name"
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-gray-500 transition-all"
                placeholder="Enter first name"
              />
            </div>

            <div>
                <input
                name="lname"
                type="text"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-gray-500 transition-all"
                placeholder="Enter last name"
              />
            </div>

            <div>
              <input
                name="email"
                type="email"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-gray-500 transition-all"
                placeholder="Enter email"
              />
            </div>

            <div>
               <input
                name="number"
                type="tel"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-gray-500 transition-all"
                placeholder="Enter mobile number"
              />
            </div>

            <div>
               <input
                name="password"
                type="password"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-gray-500 transition-all"
                placeholder="Enter password"
              />
            </div>

            <div>
                            <input
                name="cpassword"
                type="password"
                className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-gray-500 transition-all"
                placeholder="Confirm password"
              />
            </div>

            <div>
              
              <select
                name="country"
                className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md focus:bg-transparent outline-gray-500 transition-all"
              >
                <option value="">Select your country</option>
                <option value="USA">United States</option>
                <option value="India">India</option>
                <option value="UK">United Kingdom</option>
                <option value="Canada">Canada</option>
                <option value="Australia">Australia</option>
              </select>
            </div>
            <div className="flex justify-center gap-2 mt-4">
  <button
    type="button"
    className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md bg-gray-100 w-full text-gray-800 border border-gray-400 outline-gray-700"
  >
    Male
  </button>
  <button
    type="button"
    className="py-3.5 px-7 text-sm font-semibold tracking-wider rounded-md bg-gray-100 w-full text-gray-800 border border-gray-400 outline-gray-700"
  >
    Female
  </button>
</div>
            <p className="text-center text-sm leading-tight">By Creating an, you agree to Nike Privacy Policy</p>
            <p className="text-center text-sm leading-tight">and Terms of Use</p>
            <div className="mt-6 text-center">
            <button
  type="submit"
  className="h-12 w-full text-sm font-semibold tracking-wider text-white bg-black border-s-2 rounded-md"
>
  JOIN US
</button>
<p className="text-gray-800 text-sm !mt-8 text-center">Not a Member?<u>Sign In</u></p>

            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
