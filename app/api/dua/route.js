import { promises as fs } from "fs";

export async function GET() {
  try {
    const duas = await fs.readFile(
      process.cwd() + "/app/api/dua/duas.json",
      "utf8"
    );

    return new Response(duas, {
      headers: { "content-type": "application/json" },
      status: 200,
    });
  } catch {
    return new Response(JSON.stringify({ Error: "internal server error" }));
  }
}
