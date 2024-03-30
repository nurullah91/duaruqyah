import { FaBars } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { getAllCategories } from "@/utils/getAllCategories";
import CategoryData from "../CategoryData/CategoryData";


// Importing curd buttons in client side cause Card Buttons is client component
// const CategoryData = dynamic(() => import('@/app/Components/CategoryData/CategoryData'), {
//   ssr: false, // Disable server-side rendering for client component import
// });
const Categories = async ({ categoryId, searchParams }) => {
  const categories = await getAllCategories();
  // console.log(categories);

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className=" lg:hidden drawer-content flex flex-col items-start ml-4 bg-white px-4 py-2 rounded-lg shadow-md justify-center z-10">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className="drawer-button lg:hidden">
            <FaBars />
          </label>
        </div>
        <div className="drawer-side h-[calc(100vh-93px)] z-10">
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
                    <div className="mr-2">
                      <IoIosSearch className="text-2xl" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search categories"
                      className="w-full flex-shrink rounded-md border-none outline-none"
                    />
                  </div>
                </form>
              </div>
              <div className="p-4 h-[calc(100vh-210px)] overflow-auto">
               <CategoryData categoryId={categoryId} categories={categories} searchParams={searchParams}/>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
