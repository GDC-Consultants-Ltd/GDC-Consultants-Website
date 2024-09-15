// src/app/layout.js
import "./globals.css"; // Ensure your global styles are imported
import Header from "../components/Header";
import Footer from "../components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ChatBot from "@/components/ChatBot";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add meta tags and link tags directly within this head section */}
        <title>
          GDC Consultants: Innovative Solutions & Expert Guidance - GDC
          Consultants LTD
        </title>
        <meta
          name="description"
          content="GDC Consultants provides innovative solutions and expert guidance in architectural and engineering design."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body class="font-sans">
        <Header />
        {children}
        <Footer />   
        <ScrollToTop />  
        <ChatBot />   
      </body>
    </html>
  );
}
