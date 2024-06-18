import { PaystackTransaction, PaystackVerifyTransactionRes } from "@/types/paystack";

const BOOKING_AMOUNT: number = 10000;
const CONTACT_EMAIL: string = "mark@rocadeltaconsulting.com";

export const handleSubmit = (
  e: React.FormEvent<HTMLFormElement>,
  setShowPaystack: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  e.preventDefault();
  setShowPaystack(true);
};

const verifyTransaction = async (reference: string): Promise<boolean> => {
  try {
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    const data: PaystackVerifyTransactionRes = await response.json();
    console.log("datatata", data);
    if (data.status) {
      console.log("Transaction verified", data);
      return true;
    } else {
      console.log("Transaction verification failed", data);
      return false;
    }
  } catch (error) {
    console.error("Verification error", error);
    return false;
  }
};

export const handleSuccess = async (
  transaction: PaystackTransaction,
  setShowPaystack: React.Dispatch<React.SetStateAction<boolean>>
): Promise<void> => {
  const isVerified = await verifyTransaction(transaction.reference);
  if (transaction.status === "success" && isVerified) {
    console.log("Transaction was verified", isVerified);
    setShowPaystack(false);
  }

  setShowPaystack(false);
};

export const handleCancel = (
  setShowPaystack: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  console.log("Transaction was cancelled");
  setShowPaystack(false);
};

export const CONTACT_EMAIL_PLACEHOLDER: string = CONTACT_EMAIL;
export const BOOKING_AMOUNT_VALUE: number = BOOKING_AMOUNT;
export const MESSAGE_PLACEHOLDER_TEXT: string =
  "Hi, I need help developing a business model for my ecommerce store.";
