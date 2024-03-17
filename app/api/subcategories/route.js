import { dbconnect } from "@/app/lib/dbconnect";

export async function GET(req, res) {
  let db = null;
  // Open a new connection if there is none
  if (!db) {
    db = await dbconnect();
  }

  const subCategory = await db.all("SELECT * FROM sub_category");
  return new Response(JSON.stringify(subCategory), {
    headers: { "content-type": "application/json" },
    status: 200,
  });
}
