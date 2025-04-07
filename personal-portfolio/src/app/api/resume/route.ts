// MOCK API WITHIN THE APP BUT RETRIEVE FROM ANOTHER FILE INSTEAD OF A DATABASE

import { resume } from "@/app/data/data";

export async function GET() {
  return Response.json(resume);
}
