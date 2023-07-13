import ProductCard from '@/components/ProductCard'
import Wrapper from '@/components/layout/Wrapper'
import { fetchDataFromAPI } from '@/utils/axios'


const Category = ({ category, products, slug }) => {
  return (
    <div className='w-full md:py-20'>
      <Wrapper >
        <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] font-semibold leading-tight mb-5">{category[0].attributes.name}</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 md:px-0 pb-5 my-14">
          {products?.map((product) =>
            <ProductCard key={product?.id} data={product}/>
          )}
        </div>
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
  const { data: products } = await fetchDataFromAPI(`/products?populate=*&[filters][categories][slug][$eq]=${slug}`)
  return {
    props: {
      category,
      products,
      slug
    },
  }
}