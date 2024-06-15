"use client";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="h-[30vh] w-dvw flex flex-col items-center justify-center">
      {error.message} <button onClick={reset} className="underline font-bold">Try again</button>
    </div>
  );
}
