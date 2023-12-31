import GlobalState from "../context";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Blackable",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="false">
        <GlobalState>
          <Toaster position="top-center" reverseOrder={false} />
          <Navbar />
          {children}
        </GlobalState>
      </body>
    </html>
  );
}
