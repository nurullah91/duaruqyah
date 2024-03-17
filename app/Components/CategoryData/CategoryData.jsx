"use client";
import Image from "next/image";
import Link from "next/link";
import duar_gurutto from "@/public/duar_gurutto.svg";
import arrow from "@/public/duaarrow.svg";
import { useEffect, useState } from "react";
import axios from "axios";

const CategoryData = ({ categories }) => {
  const [selectedCat, setSelectedCat] = useState(1);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCat, setSelectedSubCat] = useState(0);
  const [subCatDua, setSubCatDua] = useState([]);

  // Every categories sub category
  useEffect(() => {
    const url = `http://localhost:5000/api/subcategories/${selectedCat}`;
    axios
      .get(url)
      .then((result) => {
        setSubCategories(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [selectedCat]);

  //  Sub category dua fetch
  useEffect(() => {
    const url = `http://localhost:5000/api/dua/subCategory/${selectedSubCat}`;
    axios
      .get(url)
      .then((result) => setSubCatDua(result.data))
      .catch((err) => console.log(err));
  }, [selectedSubCat]);

  console.log(subCatDua);
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
              <div className="border-l-2 border-dotted border-[#00A661] ml-6">
                {subCategories.map((subCategory) => (
                  <div
                    key={subCategory.subcat_id}
                    className="flex flex-col justify-start items-start gap-y-2 ml-3"
                  >
                    <div className="flex flex-row my-2">
                      <div className="bg-[#00A661] -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5"></div>

                      <div className="flex flex-col justify-start items-start">
                        <h5
                          onClick={() =>
                            setSelectedSubCat(subCategory.subcat_id)
                          }
                          className="font-semibold block my-2 text-[#00A661]"
                        >
                          {subCategory.subcat_name_en}
                        </h5>

                        {/* Dua name of sub category */}
                        <div>
                          {selectedSubCat === subCategory.subcat_id &&
                            subCatDua.map((item) => (
                              <a
                                key={item.dua_id}
                                href={"#dua_id_" + item.dua_id}
                                className="block"
                                onClick={(e) => {
                                  e.preventDefault(); // Prevent default anchor tag behavior
                                  const outletDiv = document.getElementById(`dua_id_${item.dua_id}`);
                                  if (outletDiv) {
                                    outletDiv.scrollIntoView({ behavior: "smooth" }); // Scroll to the outlet's div smoothly
                                  }
                                }}
                              >
                                <div className="flex">
                                  <Image
                                    className="-translate-y-1 mr-2"
                                    src={arrow}
                                    alt="arrow"
                                  />
                                  <p className="text-2xs my-3 text-left w-[95%] dark:text-gray-300">
                                    {item.dua_name_en}
                                  </p>
                                </div>
                              </a>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryData;
