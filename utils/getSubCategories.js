export const getSubCategories = async(categoryId)=>{
    const res = await fetch(`https://duaruqyah-server-six.vercel.app/api/subcategories/${categoryId}`,{
        cache: "no-cache"
    })
    return res.json();
}