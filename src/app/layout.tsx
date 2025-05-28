import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahdy Mubasyir",
  description: "Fullstack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="JuFo5khe2cN1UZAVuniKsJd26xIkH6u27FqXgvJbnts"
        />
      </head>
      <body className={`${poppins.className} bg-black`}>
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
