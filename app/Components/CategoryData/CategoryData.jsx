"use client";
import Image from "next/image";
import Link from "next/link";
import duar_gurutto from "@/public/duar_gurutto.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const CategoryData = ({ categories }) => {
  const [selectedCat, setSelectedCat] = useState(1);
const [subCategories, setSubCategories] = useState([]);
const [selectedSubCat, setSelectedSubCat] = useState(null);
const [subCatDua, setSubCatDua] = useState([]);
// Every categories sub category
  useEffect(()=>{
    const url = `http://localhost:5000/api/subcategories/${selectedCat}`;
    axios.get(url)
    .then((result)=>{
        setSubCategories(result.data)
    }).catch((err)=>{
        console.log(err);
    })

  },[selectedCat])

//  Sub category dua fetch
useEffect(()=>{
    const url = `http://localhost:5000/api/dua/subCategory/${selectedSubCat}`
    axios.get(url)
    .then((result)=>setSubCatDua(result.data))
    .catch((err)=>console.log(err))
},[selectedSubCat])


  return (
    <div>
      {categories.map((category) => (
        <Link href={`/duas/${category.cat_id}`} key={category.id}>
          <div onClick={() => setSelectedCat(category.cat_id)}>
            <div className="mt-5 flex gap-4">
              <div className="p-3 rounded-md bg-slate-100">
                <Image className="scale-75" src={duar_gurutto} alt="icon" />
              </div>
              <div>
                <h3 className="text-xl">{category.cat_name_en}</h3>
                <p>Sub Category: {category.no_of_subcat}</p>
              </div>
            </div>
            {selectedCat === category.cat_id && (
              <div className="border-l-2 border-dashed border-[#00A661] ml-10 px-2">
                {subCategories.map(subCategory=>{
                <div className="flex flex-col justify-start items-start" key={subCategory.subcat_id} >                    
                <h5 onClick={()=>setSelectedSubCat(subCategory.subcat_id)} className="font-semibold block my-2 text-[#00A661]">{subCategory.subcat_name_en}</h5>
                <div>
                    {subCatDua.map((item)=>{
                        <a href={item.dua_id}>{item.dua_name_en}</a>
                    })}
                </div>
                </div>
            })}
                
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryData;
