import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sell Books",
  description: "App Auth Layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-appindigo">{children}</body>
    </html>
  );
}
