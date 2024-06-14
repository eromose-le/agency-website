// components/PaystackPayment.tsx
import { useEffect } from "react";

interface PaystackPaymentProps {
  email: string;
  amount: number;
  onSuccess: (transaction: PaystackTransaction) => void;
  onCancel: () => void;
}

export interface PaystackTransaction {
  reference: string;
  status: string;
  transaction: string;
  // Add any other fields you need
  trans?: string;
  message?: string;
  trxref?: string;
  redirecturl?: string;
}

const PaystackPayment: React.FC<PaystackPaymentProps> = ({
  email,
  amount,
  onSuccess,
  onCancel,
}) => {
  useEffect(() => {
    const scriptId = "paystack-script";

    const initializePaystack = () => {
      console.log("Initializing Paystack");
      const handler = (window as any).PaystackPop.setup({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
        email,
        amount: amount * 100, // Paystack processes amounts in kobo (1 NGN = 100 kobo)
        callback: (response: PaystackTransaction) => {
          console.log("Payment successful", response);
          onSuccess(response);
          window.location.reload();
          handler.closeIframe(); // Close the Paystack popup after successful payment
        },
        onClose: () => {
          console.log("Payment cancelled");
          onCancel();
        },
      });
      handler.openIframe();
    };

    const loadPaystackScript = () => {
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.src = "https://js.paystack.co/v1/inline.js";
        script.async = true;
        script.id = scriptId;
        document.body.appendChild(script);
        script.onload = initializePaystack;
      } else {
        initializePaystack();
      }
    };

    loadPaystackScript();

    // Clean up the script tag when the component unmounts
    return () => {
      const script = document.getElementById(scriptId);
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [email, amount, onSuccess, onCancel]);

  return null;
};

export default PaystackPayment;
