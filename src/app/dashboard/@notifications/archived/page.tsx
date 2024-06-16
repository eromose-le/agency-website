import Card from "@/common/Card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <div className="flex flex-col items-center">
        <div>Archived notifications</div>
        <div className="underline font-bold">
          <Link href="/dashboard">Default</Link>
        </div>
      </div>
    </Card>
  );
}
