"use client";
import Circle from "@/common/Circle";
import { routeEnum } from "@/constants/routeConstants";
import styles from "@/styles/Intro.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Intro = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
      <Circle backgroundColor="#01c686" right="-40vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>Roca Delta Consulting</span> DIGITAL
          PRODUCT / SERVICES AGENCY
        </h1>
        <p className={styles.desc}>
          Your new partner in navigating today’s business landscape! At Roca
          Delta, we merge advanced technology with strategic consultancy to
          identify and solve complex business challenges.
        </p>
        <button
          className={styles.button}
          onClick={() => router.push(routeEnum.BOOK, { scroll: false })}
        >
          BOOK
        </button>
      </div>
      <div className={styles.card}>
        <Image
          src="/assets/img/Avocado.png"
          fill
          sizes="100%"
          style={{ objectFit: "cover" }}
          alt="intro"
          priority
        />
      </div>
    </div>
  );
};

export default Intro;
