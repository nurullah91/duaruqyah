export const getAllCategories = async() =>{
    const res = await fetch("http://127.0.0.1:3000/api/categories",{
        cache: "force-cache"
    })
    return res.json();
}