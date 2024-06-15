"use client";
import Circle from "@/common/Circle";
import styles from "@/styles/Contact.module.css";
import React, { useState } from "react";
import PaystackPayment, {
  PaystackTransaction,
} from "@/components/PaystackPayment";
import {
  // redirect,
  useRouter,
} from "next/navigation";

type Props = {};

const BOOKING_AMOUNT: number = 10000;
const CONTACT_EMAIL: string = "mark@rocadeltaconsulting.com";
const MESSAGE_PLACEHOLDER: string =
  "Hi, I need help developing a business model for my ecommerce store.";
const isProduction = false;

export default function Contact(props: { props: Props }) {
  // const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [amount, setAmount] = useState<number>(BOOKING_AMOUNT);
  const [showPaystack, setShowPaystack] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowPaystack(true);
  };

  const handleSuccess = async (transaction: PaystackTransaction) => {
    console.log("Transaction successful", transaction);
    if (transaction.status === "success") {
      console.log("SUCCESS FIRED");
      // return router.push("/", { scroll: false });
    }

    try {
      if (isProduction) {
        const response = await fetch("/api/verifyTransaction", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ reference: transaction.reference }),
        });
        const data = await response.json();

        if (data.status) {
          console.log("Transaction verified", data);
        } else {
          console.log("Transaction verification failed", data);
        }
      }
    } catch (error) {
      console.error("Verification error", error);
    }

    setShowPaystack(false);
  };

  const handleCancel = () => {
    console.log("Transaction was cancelled");
  };

  return (
    <div className={styles.container}>
      <Circle backgroundColor="green" left="-40vh" top="-20vh" />
      <Circle backgroundColor="yellow" right="-30vh" bottom="-60vh" />
      <h1 className={styles.title}>GET IN TOUCH</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          id="firstName"
          type="text"
          autoComplete="John"
          className={styles.inputS}
          placeholder="First name"
        />
        <input
          id="lastName"
          type="text"
          autoComplete="Doe"
          className={styles.inputS}
          placeholder="Last Name"
        />

        {/* <input id=""
          type="number"
          className={styles.inputL}
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          required
        /> */}

        <input
          id="subject"
          type="text"
          autoComplete="Enquiry"
          className={styles.inputL}
          placeholder="Subject"
        />
        <input
          id="email"
          type="email"
          autoComplete={CONTACT_EMAIL}
          className={styles.inputL}
          placeholder={CONTACT_EMAIL}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          id="message"
          autoComplete={MESSAGE_PLACEHOLDER}
          rows={6}
          className={styles.textArea}
          placeholder={MESSAGE_PLACEHOLDER}
        />
        <button className={styles.button} type="submit">
          Pay Now
        </button>
      </form>

      {showPaystack && (
        <PaystackPayment
          email={email || CONTACT_EMAIL}
          amount={amount || BOOKING_AMOUNT}
          onSuccess={handleSuccess}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
}
