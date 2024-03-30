export const getSubCategoryDua = async(subCategoryId)=>{
    const res = await fetch(`http://127.0.0.1:3000/api/dua/subcategory/${subCategoryId}`,{
        cache: "force-cache"
    })
    return res.json();
}