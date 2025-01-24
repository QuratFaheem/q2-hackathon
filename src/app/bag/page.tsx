import Header from "../components/header"
import Footer from "../components/footer"
import Nikebar from "../components/nikebar"
import Image from "next/image"
import Link from "next/link"

export default function Bag(){
    return(
<div>
    <Header/>
    <Nikebar/>
        <div className="font-sans max-w-4xl max-md:max-w-xl mx-auto p-4">
            <div ></div>
            <h1 className="text-4xl font-bold text-gray-800">Bag</h1>
            <div className="grid md:grid-cols-3 gap-4 mt-8">
                <div className="md:col-span-2 space-y-4">

                    <div className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
                        <div className="flex gap-4">
                            <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                            <Image src='/m1.png' className="w-full h-full object-contain" alt='' width={200} height={200}/>
                            </div>

                            <div className="flex flex-col gap-4">
                                <div>
                                    <h3 className="text-base font-bold text-gray-800">Nike Dri-FIT ADV TechKnite Ultra</h3>
                                    <h4>Mens Short-Sleeves Running Top</h4>
                                    <h4>
                                        Ashen Slate/  Colabait Bliss

                                    </h4>
                                    <h4>Size L      Quantity 1</h4>
                                    <div className="ml-auto flex flex-col">
                            <div className="flex items-start gap-4 justify-end">
                                <svg xmlns="" className="w-4 cursor-pointer fill-gray-400 inline-block" viewBox="0 0 64 64">
                                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
                                </svg>

                                <svg xmlns="" className="w-4 cursor-pointer fill-gray-400 inline-block" viewBox="0 0 24 24">
                                    <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"></path>
                                    <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"></path>
                                </svg>
                            </div>
                        </div>
                                </div>
    
                                     </div>
                        </div>

                        
                    </div>

                    <div className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
                        <div className="flex gap-4">
                            <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0">
                                
                            </div>

                            <div className="flex flex-col gap-4">
                                <div>
                                    <h3 className="text-base font-bold text-gray-800">Nike Air Max 97 SE</h3>
                                    <h4>Mens Short-Sleeves Running Top</h4>
                                    <h4>
                                        Ashen Slate/  Colabait Bliss

                                    </h4>
                                    <h4>Size L      Quantity 1</h4>
                                    <div className="ml-auto flex flex-col">
                            <div className="flex items-start gap-4 justify-end">
                                <svg xmlns="" className="w-4 cursor-pointer fill-gray-400 inline-block" viewBox="0 0 64 64">
                                    <path d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z" data-original="#000000"></path>
                                </svg>

                                <svg xmlns="" className="w-4 cursor-pointer fill-gray-400 inline-block" viewBox="0 0 24 24">
                                    <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z" data-original="#000000"></path>
                                    <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z" data-original="#000000"></path>
                                </svg>
                            </div>
                        </div>
                                </div>

                                </div>
                        </div>
</div>         
                </div>

                <div className="bg-white rounded-md px-4 py-6 h-max shadow-[0_2px_12px_-3px_rgba(6,81,237,0.3)]">
                    <h1 className="font-bold mb-5 mt-0">Summary</h1>
                    <ul className="text-gray-800 space-y-4">
                        <li className="flex flex-wrap gap-4 text-sm">Subtotal <span className="ml-auto font-bold">$200.00</span></li>
                        <li className="flex flex-wrap gap-4 text-sm">Estimated Delivery and Handling <span className="ml-auto font-bold">Free</span></li>
                        
                        <hr className="border-gray-300" />
                        <li className="flex flex-wrap gap-4 text-sm font-bold">Total <span className="ml-auto">$200.00</span></li>
                    </ul>

                    <div className="mt-8 space-y-2">
                       
                        <Link href='/order'><button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-black hover:bg-gray-100 text-white border border-gray-300 rounded-full">Member Checkout </button>
                        </Link>
                        </div>

                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}