// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ZingMp3 } from "zingmp3-api-full/dist";

type Song = {
  //   message: string;
  //   data: object[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Song>
) {
  let { id } = req.query;
  ZingMp3.getSong(id as string).then((data) => {
    res.status(200).json({ data });
  });
}
