export const getSubCategories = async(categoryId)=>{
    const res = await fetch(`http://127.0.0.1:3000/api/subcategories/${categoryId}`,{
        cache: "no-cache"
    })
    return res.json();
}