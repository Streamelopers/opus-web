// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import jobFactory from "factories/jobFactory";

export default (req: NextApiRequest, res: NextApiResponse) => {
  const jobsFakeResponse = new Array(10).fill(null).map(() => jobFactory());
  res.status(200).json(jobsFakeResponse);
};
