import { dbconnect } from "@/app/lib/dbconnect";

export async function GET(req, {params}) {
    const {categoryId} = params
  let db = null;
  if (!db) {
    db = await dbconnect();
  }

  const dua = await db.all('SELECT * FROM dua WHERE cat_id = ?', [categoryId]);
  return new Response(JSON.stringify(dua), {
    headers: { "content-type": "application/json" },
    status: 200,
  });
}
