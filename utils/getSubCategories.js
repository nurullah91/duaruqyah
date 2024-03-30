export const getSubCategories = async(categoryId)=>{
    const res = await fetch(`https://duaruqyah-nu.vercel.app/api/subcategories/${categoryId}`,{
        cache: "no-cache"
    })
    return res.json();
}