import { promises as fs } from "fs";

export async function GET(req, { params }) {
  const { categoryId } = params;

  try {
    const data = await fs.readFile(
      process.cwd() + "/duas.json",
      "utf8"
    );
    const duas = JSON.parse(data);
    const selectedDuas = duas.filter((dua) => dua.cat_id === +categoryId); //this + convert category id string to number

    return new Response(JSON.stringify(selectedDuas), {
      headers: { "content-type": "application/json" },
      status: 200,
    });
  } catch {
    return new Response(JSON.stringify({ Error: "internal server error" }));
  }
}
