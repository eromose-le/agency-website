export default function DashboardLayout({
  children,
  users,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  notifications: React.ReactNode;
}) {
  return (
    <div>
      {children}
      {users}
      {notifications}
    </div>
  );
}
