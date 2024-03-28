import { promises as fs } from "fs";

export async function GET(req, { params }) {
  const {categoryId} = params
  
  try {
    const data = await fs.readFile(
      process.cwd() + "/app/api/subcategories/sub_category.json",
      "utf8"
    );

    const subcategories = JSON.parse(data);
    //add a + before categoryId to convert category id string to number
    const selectedSubcategory = subcategories.filter((subCat)=>subCat.cat_id === +categoryId)

    return new Response(JSON.stringify(selectedSubcategory), {
      headers: { "content-type": "application/json" },
      status: 200,
    });
  } catch {
    return new Response(JSON.stringify({ Error: "internal server error" }));
  }
}
