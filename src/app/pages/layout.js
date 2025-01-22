import { Inter, Handlee } from "next/font/google";
import BottomNav from "@/components/bottomnav";
import "../globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sell Books",
  description: "App Main Layout",
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-appyellow">
        <main className="mb-[55px]">{children}</main>

        <div className="fixed-footer">
          <BottomNav/>
        </div>

      </body>
    </html>
  );
}
