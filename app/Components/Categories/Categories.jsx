import React from "react";
import { FaBars } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import duar_gurutto from "@/public/duar_gurutto.svg";
import Image from "next/image";
import Link from "next/link";
async function getCategories() {
  const res = await fetch("http://localhost:5000/api/categories", {
    next: {
      revalidate: 60,
    },
  });
  return res.json();
}

const Categories = async () => {
  const categories = await getCategories();
  // console.log(categories);

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
            <FaBars />
          </label>
        </div>
        <div className="drawer-side h-[calc(100vh-93px)]">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="">
            <ul className="menu w-80 bg-base-100 text-base-content rounded-xl p-0 overflow-hidden">
              {/* Sidebar content here */}
              <div className="">
                <h4 className=" bg-green-600 text-white text-center px-3 py-4  font-semibold m-0 rounded-t-xl">
                  Categories
                </h4>
                <form>
                  <div className="mx-4 mt-3 flex items-center border p-3 rounded-md border-slate-300 focus:border-green-500">
                  <div className="mr-2"><IoIosSearch className='text-2xl'/></div>
                    <input
                      type="text"
                      placeholder="Search categories"
                      className="w-full flex-shrink rounded-md border-none outline-none"
                    />
                    
                  </div>
                </form>
              </div>
              <div className="p-4 h-[calc(100vh-210px)] overflow-auto">
                {categories.map((category) => (
                  <Link href={`/duas/${category.cat_id}`} key={category.id}>
                    <div className="mt-5 flex gap-4">
                      <div className="p-3 rounded-md bg-slate-100">
                        <Image
                          className="scale-75"
                          src={duar_gurutto}
                          alt="icon"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl">{category.cat_name_en}</h3>
                        <p>Sub Category: {category.no_of_subcat}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
