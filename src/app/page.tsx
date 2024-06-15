import { Suspense } from "react";
import Landing from "./(guest_layout)/(landing)/page";

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <Landing />
      </Suspense>
    </>
  );
}
