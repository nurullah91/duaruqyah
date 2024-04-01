import { promises as fs } from "fs";

export async function GET() {
  
  try {
    const categories = await fs.readFile(
      process.cwd() + "/categories.json",
      "utf8"
    );

    return new Response(categories, {
      headers: { "content-type": "application/json" },
      status: 200,
    });
  } catch {
    return new Response(JSON.stringify({ Error: "internal server error" }));
  }
}
