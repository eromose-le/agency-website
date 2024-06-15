import { Suspense } from "react";
import Landing from "./(guest_layout)/(landing)/page";
import Loading from "./(guest_layout)/(landing)/service/[slug]/reviews/[reviewId]/loading";

export default function Home() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Landing />
      </Suspense>
    </>
  );
}
