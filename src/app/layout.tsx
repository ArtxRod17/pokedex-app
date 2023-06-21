import "./globals.css";
import { Inter } from "next/font/google";
import SearchBar from "@/components/SearchBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Pokedex App",
  description: "Created by Arturo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-zinc-900 text-zinc-200">
        <div className=" flex flex-col gap-10 items-center p-6">
          <SearchBar />
          <div className=" flex flex-col items-center w-full"> {children}</div>
        </div>
      </body>
    </html>
  );
}
