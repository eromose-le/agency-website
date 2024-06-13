import { Suspense } from "react";
import Landing from "./(main_layout)/landing/page";
import Layout from "./(main_layout)/layout";

export default function Home() {
  return (
    <>
      <Layout>
        <Suspense fallback={null}>
          <Landing />
        </Suspense>
      </Layout>
    </>
  );
}
