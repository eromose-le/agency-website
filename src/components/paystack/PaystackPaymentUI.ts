import { PaystackPaymentUIProps, PaystackTransaction } from "@/types/paystack";
import { useEffect } from "react";

const loadPaystackScript = (onLoad: () => void) => {
  const scriptId = "paystack-script";
  if (!document.getElementById(scriptId)) {
    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    script.id = scriptId;
    script.onload = onLoad;
    document.body.appendChild(script);
  } else {
    onLoad();
  }
};

const PaystackPaymentUI: React.FC<PaystackPaymentUIProps> = ({
  email,
  amount,
  onSuccess,
  onCancel,
}) => {
  useEffect(() => {
    const initializePaystack = () => {
      console.log("Initializing Paystack");
      const handler = (window as any).PaystackPop.setup({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
        email,
        amount: amount * 100, // Paystack processes amounts in kobo (1 NGN = 100 kobo)
        callback: (response: PaystackTransaction) => {
          console.log("Payment successful", response);
          onSuccess(response);
          // handler.closeIframe();
          // window.location.reload();
        },
        onClose: () => {
          console.log("Payment cancelled");
          onCancel();
          // handler.closeIframe();
          // window.location.reload();
        },
      });
      handler.openIframe();
    };

    loadPaystackScript(initializePaystack);

    return () => {
      const script = document.getElementById("paystack-script");
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [email, amount, onSuccess, onCancel]);

  return null;
};

export default PaystackPaymentUI;
