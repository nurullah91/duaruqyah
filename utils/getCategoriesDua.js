export const getCategoriesDua = async(CategoryId)=>{
    const res = await fetch(`http://127.0.0.1:3000/api/dua/${CategoryId}`,{
        cache: "force-cache"
    })
    return res.json();
}