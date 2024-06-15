import Footer from "@/common/Footer";
import Navbar from "@/common/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
