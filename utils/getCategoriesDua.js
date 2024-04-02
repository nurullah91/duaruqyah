export const getCategoriesDua = async(CategoryId)=>{
    const res = await fetch(`https://duaruqyah-server-six.vercel.app/api/dua/${CategoryId}`,{
        cache: "force-cache"
    })
    return res.json();
}