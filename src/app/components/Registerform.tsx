import Image from "next/image";

export default function RegisterForm() {
  return (
    <div className="bg-gray-50 font-[sans-serif] min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
        <div className="text-center mb-6">
          <Image src="/vector.png" alt="logo" width={150} height={150} />
          <h4 className="text-gray-800 text-lg font-semibold mt-4">
            Sign up into your account
          </h4>
        </div>

        <form>
          <div className="grid grid-cols-1 gap-4">
            <input
              name="name"
              type="text"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-white outline-gray-500 transition-all"
              placeholder="Enter first name"
            />
            <input
              name="lname"
              type="text"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-white outline-gray-500 transition-all"
              placeholder="Enter last name"
            />
            <input
              name="email"
              type="email"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-white outline-gray-500 transition-all"
              placeholder="Enter email"
            />
            <input
              name="number"
              type="tel"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-white outline-gray-500 transition-all"
              placeholder="Enter mobile number"
            />
            <input
              name="password"
              type="password"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-white outline-gray-500 transition-all"
              placeholder="Enter password"
            />
            <input
              name="cpassword"
              type="password"
              className="bg-gray-100 w-full text-gray-800 text-sm px-4 py-3.5 rounded-md focus:bg-white outline-gray-500 transition-all"
              placeholder="Confirm password"
            />
            <select
              name="country"
              className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md focus:bg-white outline-gray-500 transition-all"
            >
              <option value="">Select your country</option>
              <option value="USA">United States</option>
              <option value="India">India</option>
              <option value="UK">United Kingdom</option>
              <option value="Canada">Canada</option>
              <option value="Australia">Australia</option>
            </select>
            <div className="flex justify-center gap-2">
              <button
                type="button"
                className="py-3.5 px-6 text-sm font-semibold tracking-wider rounded-md bg-gray-100 w-full text-gray-800 border border-gray-400 outline-gray-700"
              >
                Male
              </button>
              <button
                type="button"
                className="py-3.5 px-6 text-sm font-semibold tracking-wider rounded-md bg-gray-100 w-full text-gray-800 border border-gray-400 outline-gray-700"
              >
                Female
              </button>
            </div>
            <p className="text-center text-xs leading-tight text-gray-500">
              By creating an account, you agree to Nike's Privacy Policy
              and Terms of Use.
            </p>
            <div className="mt-6">
              <button
                type="submit"
                className="h-12 w-full text-sm font-semibold tracking-wider text-white bg-black rounded-md"
              >
                JOIN US
              </button>
              <p className="text-gray-800 text-sm mt-4 text-center">
                Not a Member? <u className="cursor-pointer">Sign In</u>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
