export const getAllCategories = async() =>{
    const res = await fetch("https://duaruqyah-server-six.vercel.app/api/categories",{
        cache: "force-cache"
    })
    return res.json();
}