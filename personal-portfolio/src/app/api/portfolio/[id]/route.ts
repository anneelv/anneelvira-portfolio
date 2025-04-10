// Dynamic API to handle EACH portfolio data
import { portfolioData } from "@/app/data/data";

export async function GET(
  _request: Request,
  { params }: { params: { id: string } } //Here we are passing the number of the portfolio as a string parameter for the request
) {
  // In case of using a real dataase, instead of .find (JavaScript Higher Order function) we will use 'SELECT ... FROM ...'
  const portfolioItem = portfolioData.find(
    // matching the numerical data of id acquired from Portfolio Data to String data that we want to get from the request ^
    (item: { id: number }) => item.id.toString() === params.id
  );

  return Response.json(portfolioItem);
}
