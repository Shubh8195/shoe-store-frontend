import HeroBanner from "@/components/HeroBanner";
import Wrapper from "@/components/layout/Wrapper";
import Link from "next/link";

export default function Home() {
    return (
        <main className="">
            <HeroBanner />
            <Wrapper >
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] font-semibold leading-tight mb-5">Cushioning for Your Miles</div>
                    <div className="text-md md:text-xl">A lightweight Nike ZoomX midsole is combined with increased stack heights to help provide cushioning during extended stretches of running.</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-0 pb-5">
                    <Link href="/" className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
                        <img src="/assets/p1.png"/>
                        <div className="p-4 text-black/[0.9]">
                            <h2 className="text-lg font-medium">Air Jordan XXXVII Low PF</h2>
                            <div className="flex items-center text-black/[0.5]">
                                <p className="mr-2 text-lg font-semibold">₹16295</p>
                                <p className="text-base font-medium line-through">₹18295</p>
                                <p className="ml-auto text-base font-medium text-green-500">10.93% off</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </Wrapper>
        </main>
    )
}
