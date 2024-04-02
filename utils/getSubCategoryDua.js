export const getSubCategoryDua = async(subCategoryId)=>{
    const res = await fetch(`https://duaruqyah-server-six.vercel.app/api/dua/subcategory/${subCategoryId}`,{
        cache: "force-cache"
    })
    return res.json();
}