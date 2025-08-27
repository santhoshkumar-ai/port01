

import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";


const sora = Sora({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "👋 Hi, I’m Sujay Sharvesh ",
  description:
    "Full-stack developer with hands-on experience building scalable backend services and modern web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="SujaySharvesh"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={sora.className}> 
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
      </body>
    </html>
  );
}
