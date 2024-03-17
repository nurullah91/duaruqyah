import { dbconnect } from "@/app/lib/dbconnect";

export async function GET(req, {params}) {
    const {subcategoryId} = params
  let db = null;
  if (!db) {
    db = await dbconnect();
  }

  const subcategoryDua = await db.all('SELECT * FROM dua WHERE subcat_id = ?', [subcategoryId]);
  return new Response(JSON.stringify(subcategoryDua), {
    headers: { "content-type": "application/json" },
    status: 200,
  });
}
