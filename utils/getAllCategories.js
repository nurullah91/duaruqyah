export const getAllCategories = async() =>{
    const res = await fetch("https://duaruqyah-nu.vercel.app/api/categories",{
        cache: "force-cache"
    })
    return res.json();
}