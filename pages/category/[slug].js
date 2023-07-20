import Loading from '@/components/Loading';
import ProductCard from '@/components/ProductCard'
import Wrapper from '@/components/layout/Wrapper'
import { fetchDataFromAPI } from '@/utils/axios'
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const maxResults = 3;

const getCategoriesProduct = async (slug, pageIndex) => {
   const products = await fetchDataFromAPI(`/products?populate=*&[filters][categories][slug][$eq]=${slug}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResults}`);
   return products
};

const Category = ({ category, slug }) => {

   const [pageIndex, setPageIndex] = useState(1);

   useEffect(() => {
      setPageIndex(1)
   }, [slug])

   const { data: products, isLoading, isFetching } = useQuery({
      queryKey: [`category_products=${slug}`, pageIndex],
      queryFn: () => getCategoriesProduct(slug, pageIndex),
      keepPreviousData: true
   })

   if (isLoading) {
      return <Loading />
   }

   return (
      <div className='w-full md:py-20 relative'>
         <Wrapper >
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
               <div className="text-[28px] md:text-[34px] font-semibold leading-tight mb-5">{category[0].attributes.name}</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-0 pb-5 my-14">
               {products?.data?.map((product) =>
                  <ProductCard key={product?.id} data={product} />
               )}
            </div>
            {/* PAGINATION BUTTONS START */}
            {products?.meta?.pagination?.total > maxResults && (
               <div className="flex gap-3 items-center justify-center my-16 md:my-0">
                  <button
                     className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
                     disabled={pageIndex === 1}
                     onClick={() => setPageIndex(pageIndex - 1)}
                  >
                     Previous
                  </button>

                  <span className="font-bold">{`${pageIndex} of ${products && products.meta.pagination.pageCount
                     }`}</span>

                  <button
                     className={`rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500`}
                     disabled={
                        pageIndex ===
                        (products && products.meta.pagination.pageCount)
                     }
                     onClick={() => setPageIndex(pageIndex + 1)}
                  >
                     Next
                  </button>
               </div>
            )}
            {/* PAGINATION BUTTONS END */}
            {isFetching && (
               <div className="absolute top-0 left-0 w-full h-full bg-white/[0.5] flex flex-col gap-5 justify-center items-center">
                  <img src="/assets/logo.svg" width={150} alt="logo" />
                  <span className="text-2xl font-medium">Loading...</span>
               </div>
            )}
         </Wrapper>
      </div>
   )
}

export default Category

export async function getStaticPaths() {
   const { data: category } = await fetchDataFromAPI('/categories')

   const paths = category?.map((c) => ({
      params: {
         slug: c.attributes.slug,
      },
   }));

   return {
      paths,
      fallback: false,
   };
}

export async function getStaticProps({ params: { slug } }) {
   const { data: category } = await fetchDataFromAPI(`/categories?filters[slug][$eq]=${slug}`)

   return {
      props: {
         category,
         slug,
      },
   }
}