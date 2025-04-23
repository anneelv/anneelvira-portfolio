// Dynamic API to handle EACH portfolio data
import { portfolioData } from "@/app/data/data";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } } //Here we are passing the number of the portfolio as a string parameter for the request
) {
  const { id } = context.params;
  // In case of using a real dataase, instead of .find (JavaScript Higher Order function) we will use 'SELECT ... FROM ...'
  const portfolioItem = portfolioData.find(
    // matching the numerical data of id acquired from Portfolio Data to String data that we want to get from the request ^
    // (item: { id: number }) => item.id.toString() === id
    (item) => item.id.toString() === id
  );

  return Response.json(portfolioItem);
}
