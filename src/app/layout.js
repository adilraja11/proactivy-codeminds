import { Inter } from "next/font/google";
import "../styles/globals.css";
import { AppbarLayout } from "@/components/navigation/appbarLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ProActivity",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>{children}</div>
        </body>
    </html>
  );
}
