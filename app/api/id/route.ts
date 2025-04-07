import { create, getAll } from "@/utils/db";

// retrieve data
export async function GET() {
  const ids = await getAll();
  return Response.json(ids, { status: 200 });
}

// sending to db
export async function POST() {
  await create();
  // returning status 200 because there's no content yet
  return Response.json({ status: 200 });
}
