
import Image from "next/image"
export default function Signinform(){
    return(
        <div>
        <div className="bg-gray-50 font-[sans-serif]">
      <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
        <div className="max-w-md w-full">
          <Image
            src="/vector.png" alt="logo" width={100} height={100} />
    

          <div className="p-8 rounded-2xl bg-white shadow">
            <p className="text-gray-800 text-center text-2xl font-bold">YOUR ACCOUNT</p>
            <p className="text-gray-800 text-center text-2xl font-bold">FOR EVERYTHING</p>
            <p className="text-gray-800 text-center text-2xl font-bold">NIKE</p>
            <form className="mt-8 space-y-4">
              <div>
            
                <div className="relative flex items-center">
                  <input name="Email address" type="text" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter user name" />
                  
                </div>
              </div>

              <div>

                <div className="relative flex items-center">
                  <input name="password" type="password" required className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-blue-600" placeholder="Enter password" />
                  
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <input id="Keep me signed In" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 border-gray-300 rounded" />
                
                    Remember me

                </div>
                <div className="text-sm">
                  Forgotten Your Password?
                </div>
              </div>
              <div>
  <p className="text-center text-sm leading-tight">By logging in, you agree to Nike Privacy Policy</p>
  <p className="text-center text-sm leading-tight">and Terms of Use</p>
</div>


              <div className="!mt-8">
                <button type="button" className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-black focus:outline-none">
                  SIGN IN
                </button>
              </div>
              <p className="text-gray-800 text-sm !mt-8 text-center">Not a Member? <a href="javascript:void(0);" className="text-blue-600 hover:underline ml-1 whitespace-nowrap font-semibold"><u>Join Us</u></a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}