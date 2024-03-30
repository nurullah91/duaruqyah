import Image from "next/image";
import Link from "next/link";
import duar_gurutto from "@/public/duar_gurutto.svg";
import { getSubCategories } from "@/utils/getSubCategories";
import { getSubCategoryDua } from "@/utils/getSubCategoryDua";
import DuasName from "./DuasName";


const CategoryData = async ({ categoryId, categories, searchParams }) => {
  const subCategories = await getSubCategories(categoryId);
  const subcategoryId = searchParams.subcategory;
  const subCategoryDua = await getSubCategoryDua(subcategoryId)

  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
        <Link href={`/duas/category-${category.cat_id}`} className="block">
          <div>
            <div className="mt-5 flex gap-4">
              <div className="p-3 rounded-md bg-slate-100">
                <Image className="scale-75" src={duar_gurutto} alt="icon" />
              </div>
              <div>
                <h3 className="text-xl">{category.cat_name_en}</h3>
                <p>Sub Category: {category.no_of_subcat}</p>
              </div>
            </div>
            {+categoryId === category.cat_id && (
              <div className="border-l-2 border-dotted border-[#00A661] ml-6">
                {subCategories.map((subCategory) => (
                  <Link
                    href={`?subcategory=${subCategory.subcat_id}`}
                    key={subCategory.subcat_id}
                    className="flex flex-col justify-start items-start gap-y-2 ml-3"
                  >
                    <div className="flex flex-row my-2">
                      <div className="bg-[#00A661] -translate-x-4 mt-1.5 w-1.5 rounded-full h-1.5"></div>

                      <div className="flex flex-col justify-start items-start">
                        <h5 className="font-semibold block my-2 text-[#00A661]">
                          {subCategory.subcat_name_en}
                        </h5>

                        {/* Dua name of sub category */}
                        <div>
                          {+subcategoryId === subCategory.subcat_id && <DuasName subCategoryDua={subCategoryDua}/>}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryData;
