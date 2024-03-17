import { dbconnect } from "@/app/lib/dbconnect";


// Handler for GET requests to retrieve all todos
export async function GET(req, res) {
let db = null;
  // Open a new connection if there is none
  if (!db) {
    db = await dbconnect();
  }

  // Query to get all todos from the "todo" table
  const todos = await db.all("SELECT * FROM dua");

  // Return the todos as a JSON response with a 200 status code
  return new Response(JSON.stringify(todos), {
    headers: { "content-type": "application/json" },
    status: 200,
  });
}