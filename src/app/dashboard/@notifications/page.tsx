import Card from "@/common/Card";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div className="flex flex-col items-center">
        <div>Notifications</div>
        <div className="underline font-bold">
          <Link href="/dashboard/archived">Archived</Link>
        </div>
      </div>
    </Card>
  );
}
