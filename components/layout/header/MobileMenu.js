import Link from 'next/link';
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'

const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
];

// const subMenuData = [
//     { id: 1, name: "Jordan", doc_count: 11 },
//     { id: 2, name: "Sneakers", doc_count: 8 },
//     { id: 3, name: "Running shoes", doc_count: 64 },
//     { id: 4, name: "Football shoes", doc_count: 107 },
// ];
const MobileMenu = ({ showCatMenu, setShowCatMenu, setMobileMenu, categories }) => {
    return (
        <ul className='md:hidden flex flex-col font-bold absolute top-[50px] left-0 w-full h-[calc(100vh - 50px)] bg-white border-t text-black'>
            {data?.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        {!item.subMenu ? (
                            <li className="flex flex-col py-5 px-5 border-b" >
                                <Link href={item.url} onClick={() => setMobileMenu(false)}>
                                    {item.name}
                                </Link>
                            </li>
                        ) : (
                            <li className='flex flex-col py-5 px-5 border-b'
                                onClick={() => setShowCatMenu(!showCatMenu)}
                            >
                                <div className='flex justify-between items-center'>
                                    {item.name}
                                    <BsChevronDown size={14} />
                                </div>
                                {showCatMenu && (
                                    <ul className='bg-black/[0.05] -mx-5 mt-4 -mb-4'>
                                        {categories.map(({attributes : c, id}) => (
                                            <Link href={`/category/${c.slug}`} key={id} onClick={() => {
                                                setShowCatMenu(false)
                                                setMobileMenu(false)
                                            }}>
                                                <li className='py-4 px-8 border-t flex justify-between'>{c.name}
                                                    <span className='opacity-50 text-sm'>{`(${c?.products?.data?.length})`}</span>
                                                </li>
                                            </Link>
                                        ))}
                                    </ul>
                                )
                                }
                            </li>
                        )
                        }
                    </React.Fragment>
                )
            })}
        </ul>
    )
}

export default MobileMenu