import type { Metadata } from "next";
// import { Poppins, Roboto } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
// import { ModeToggle } from "@/components/theme-changer";

// const PoppinsSans = Poppins({
//   subsets: ["latin"],
//   variable: "--font-geist-sans",
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });
// const RobotoMono = Roboto({
//   subsets: ["latin"],
//   variable: "--font-geist-mono",
//   weight: ["100", "300", "400", "500", "700", "900"],
// });
export const metadata: Metadata = {
  title: "Khiilen",
  description: "A personal website for Khiilen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
      // className={`${PoppinsSans.variable} ${RobotoMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body> 
    </html>
  );
}
