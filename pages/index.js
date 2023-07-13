import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/layout/Wrapper";
import { fetchDataFromAPI } from "@/utils/axios";
import { QueryClient, useQuery } from "@tanstack/react-query";

import { dehydrate } from '@tanstack/react-query'


const getProducts = async () => {
    const productData = await fetchDataFromAPI('/products?populate=*');
    return productData
};

const Home = () => {
    const { data: products, isLoading, isError, isFetching } = useQuery({
        queryKey: ['product'],
        queryFn: getProducts,
    })

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <main className="" >
            <HeroBanner />
            <Wrapper >
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] font-semibold leading-tight mb-5">Cushioning for Your Miles</div>
                    <div className="text-md md:text-xl">A lightweight Nike ZoomX midsole is combined with increased stack heights to help provide cushioning during extended stretches of running.</div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-0 pb-5 my-14">
                    {products?.data.map((product) => ( 
                        <ProductCard key={product?.id} data={product}/>
                    ))}

                </div>
            </Wrapper>
        </main>
    )
}

export default Home

export async function getStaticProps() {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(['product'], getProducts)

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}