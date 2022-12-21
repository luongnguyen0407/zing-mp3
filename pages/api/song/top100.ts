// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ZingMp3 } from "zingmp3-api-full/dist";
type Data = {
  message: string;
  data: object[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  ZingMp3.getTop100().then((data) => {
    res.status(200).json({
      message: data.msg,
      data: data.data,
    });
  });
}
