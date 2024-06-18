// pages/api/verifyTransaction.ts
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

interface VerificationResponse {
  status: boolean;
  data: any;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    console.log("API VERIFY", req.body);
    const { reference } = req.body;

    try {
      const response = await axios.get<VerificationResponse>(
        `https://api.paystack.co/transaction/verify/${reference}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          },
        }
      );

      if (response.data.status) {
        res.status(200).json(response.data);
      } else {
        res.status(400).json({ message: "Transaction not successful" });
      }
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;
