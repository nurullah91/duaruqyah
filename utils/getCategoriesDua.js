export const getCategoriesDua = async(CategoryId)=>{
    const res = await fetch(`https://duaruqyah-nu.vercel.app/api/dua/${CategoryId}`,{
        cache: "force-cache"
    })
    return res.json();
}