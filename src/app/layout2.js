
import { GoogleTagManager } from "@next/third-parties/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

import { poppins, redhat } from "./font";
import Main from "./Main";
import FacebookPixel from "@/components/FacebookPixel/FacebookPixel";

export const metadata = {
  title: "Top Digital Marketing Company in Dallas",

  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-WSSFNZR" />

      <body className={`${poppins.variable} ${redhat.variable} `}>
        <Main>{children}</Main>
      </body>
      <GoogleAnalytics gaId="AW-723033963" />
      <FacebookPixel />
    </html>
  );
}
