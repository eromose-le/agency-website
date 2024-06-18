"use client";
import Circle from "@/common/Circle";
import styles from "@/styles/Book.module.css";
import React, { useState } from "react";
import PaystackPaymentUI from "@/components/paystack/PaystackPaymentUI";
import {
  handleSubmit,
  handleSuccess,
  handleCancel,
  CONTACT_EMAIL_PLACEHOLDER,
  BOOKING_AMOUNT_VALUE,
  MESSAGE_PLACEHOLDER_TEXT,
} from "@/api/paystackPayment";

export default function Book() {
  const [email, setEmail] = useState<string>("");
  const [amount] = useState<number>(BOOKING_AMOUNT_VALUE);
  const [showPaystack, setShowPaystack] = useState<boolean>(false);

  return (
    <div className={styles.container}>
      <Circle backgroundColor="green" left="-40vh" top="-20vh" />
      <Circle backgroundColor="yellow" right="-30vh" bottom="-60vh" />
      <h1 className={styles.title}>GET IN TOUCH</h1>
      <form
        className={styles.form}
        onSubmit={(e) => handleSubmit(e, setShowPaystack)}
      >
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
          autoComplete={CONTACT_EMAIL_PLACEHOLDER}
          className={styles.inputL}
          placeholder={CONTACT_EMAIL_PLACEHOLDER}
          // value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          id="message"
          autoComplete={MESSAGE_PLACEHOLDER_TEXT}
          rows={6}
          className={styles.textArea}
          placeholder={MESSAGE_PLACEHOLDER_TEXT}
        />
        <button className={styles.button} type="submit">
          Pay Now
        </button>
      </form>

      {showPaystack && (
        <PaystackPaymentUI
          email={email || CONTACT_EMAIL_PLACEHOLDER}
          amount={amount}
          onSuccess={(transaction) =>
            handleSuccess(transaction, setShowPaystack)
          }
          onCancel={() => handleCancel(setShowPaystack)}
        />
      )}
    </div>
  );
}
