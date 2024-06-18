import React from "react";
import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Intro from "@/components/intro/Intro";
import Services from "@/components/service/Services";
import Testimonials from "@/components/testimonials/Testimonials";
import Layout from "../layout";

export default async function Landing() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Roca Delta Consulting</title>
        <meta name="description" content="Roca Delta Consulting" />
      </Head>

      <Layout>
        <Intro />
        <Services />
        <Testimonials />
      </Layout>
    </div>
  );
}
