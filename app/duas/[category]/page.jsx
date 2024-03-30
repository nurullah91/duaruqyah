import React from 'react';
import duaCardLogo from '@/public/duacard.svg'
import Image from 'next/image';

import { Toaster } from 'react-hot-toast';
import dynamic from 'next/dynamic';
import Categories from '@/app/Components/Categories/Categories';
import { getCategoriesDua } from '@/utils/getCategoriesDua';
import CardButtons from '@/app/Components/CardButtons/CardButtons';

// Importing curd buttons in client side cause Card Buttons is client component
// const CardButtons = dynamic(() => import('@/app/Components/CardButtons/CardButtons'), {
//   ssr: false, // Disable server-side rendering for client component import
// });


// async function getDuas(categoryId) {
//     const res = await fetch(`${process.env.BASE_URL}/api/dua/${categoryId}`, {
//         next: {
//             revalidate: 60
//         }
//     })
//     if(!res.ok){
//         throw new Error("dua fetch failed")
//       }
//     return res.json()
// }


const CategoryDua = async ({ params, searchParams }) => {

    const category = params.category;
    const categoryId = category.split("-")[1];
    const duas = await getCategoriesDua(categoryId);

    return (
        <div className='h-[calc(100vh-105px)] lg:h-[calc(100vh-80px)] pageContent'>
            {/* React hot toast */}
            <Toaster/>
            <div className="h-fit">
              <Categories searchParams={searchParams} categoryId={categoryId}></Categories>
            </div>
            <div className='h-full overflow-auto mx-3'>
                {
                    duas.map((dua) => <div id={"dua_id_"+dua.dua_id} className='mb-5 p-6 bg-base-100 rounded-xl' key={dua.dua_id}>

                        <div className='flex items-center gap-3'>
                            <Image src={duaCardLogo} alt='icon' />
                            <h3 className="font-semibold text-green-600">{dua.dua_id}. {dua.dua_name_en}</h3>
                        </div>

                        <div className='text-xl'>
                            {dua.top_en && <p className='mt-5'>{dua.top_en}</p>}
                            {dua.dua_arabic && <p className='text-right text-2xl tracking-wider font-bold my-8'>{dua.dua_arabic}</p>}
                            {dua.transliteration_en && <p className='italic my-5 text-slate-700'><span className='font-semibold text-xl '>Transliteration: </span>{dua.transliteration_en}</p>}
                            {dua.translation_en && <p className='my-5 text-slate-600'><span className='font-semibold'>Translation: </span>{dua.translation_en}</p>}
                            {dua.bottom_en && <p className='mt-5 text-slate-600'>{dua.bottom_en}</p>}
                        </div>

                        {dua.refference_en && <div className='mt-5'>
                            <h4 className="text-green-600 font-bold">Reference:</h4>
                            <p className='mt-1 text-xl mb-5'>{dua.refference_en}</p>

                        </div>}

                       <CardButtons
                       dua={dua}
                       />

                    </div>)
                }
            </div>
        </div>
    );
};

export default CategoryDua;