import React from 'react'

import ProductCard from '@/components/ProductCard'
import Wrapper from '@/components/layout/Wrapper'
import { useRouter } from 'next/router'

const Category = () => {
  return (
    <div className='w-full md:py-20'>
      <Wrapper >
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] font-semibold leading-tight mb-5">Running Shoes</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-0 pb-5 my-14">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Wrapper>
    </div>
  )
}

export default Category