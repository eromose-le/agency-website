"use client";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="h-[30vh] w-dvw flex flex-col items-center justify-center">
      <p>This Service does Not Exist!</p>
      <button
        className="underline font-bold"
        onClick={() => router.back()}
      >
        Go Back
      </button>
    </div>
  );
}
