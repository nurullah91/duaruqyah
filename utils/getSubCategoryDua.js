export const getSubCategoryDua = async(subCategoryId)=>{
    const res = await fetch(`https://duaruqyah-nu.vercel.app/api/dua/subcategory/${subCategoryId}`,{
        cache: "force-cache"
    })
    return res.json();
}