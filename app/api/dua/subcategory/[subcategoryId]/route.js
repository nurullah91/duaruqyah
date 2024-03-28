import { promises as fs } from "fs";

export async function GET(req, { params }) {
  try {
    const { subcategoryId } = params;
    const data = await fs.readFile(
      process.cwd() + "/app/api/dua/duas.json",
      "utf8"
    );
    const duas = JSON.parse(data);
    const selectedDua = duas.filter((dua) => dua.subcat_id === +subcategoryId);
    return new Response(JSON.stringify(selectedDua), {
      headers: { "content-type": "application/json" },
      status: 200,
    });
  } catch {
    return new Response(JSON.stringify({ Error: "internal server error" }));
  }
}
