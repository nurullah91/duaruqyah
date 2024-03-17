import { dbconnect } from "@/app/lib/dbconnect";

export async function GET(req, res) {
  let db = null;
  // Open a new connection if there is none
  if (!db) {
    db = await dbconnect();
  }

  const category = await db.all("SELECT * FROM category");
  return new Response(JSON.stringify(category), {
    headers: { "content-type": "application/json" },
    status: 200,
  });
}
