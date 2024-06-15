import { getRandomInt } from "@/utils";

export default function ServiceDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const random = getRandomInt(2);
  // if (random === 1) {
  //   throw new Error("Error loading layout service");
  // }

  return <>{children}</>;
}
