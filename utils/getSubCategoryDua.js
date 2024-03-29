export const getSubCategoryDua = async(subCategoryId)=>{
    const res = await fetch(`http://127.0.0.1:3000/api/subcategories/${subCategoryId}`,{
        cache: "no-cache"
    })
    return res.json();
}