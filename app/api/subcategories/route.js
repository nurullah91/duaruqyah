import { promises as fs } from "fs";

export async function GET(req, res) {
  
  try {
    const subcategories = await fs.readFile(
      process.cwd() + "/sub_category.json",
      "utf8"
    );

    return new Response(subcategories, {
      headers: { "content-type": "application/json" },
      status: 200,
    });
  } catch {
    return new Response(JSON.stringify({ Error: "internal server error" }));
  }
}
