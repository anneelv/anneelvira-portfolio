// API to call ALL portfolio data to main website
import { portfolioData } from "@/app/data/data";

export async function GET() {
  return Response.json(portfolioData);
}
